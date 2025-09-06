import torch
import torch.nn as nn
from torchvision import transforms
from transformers import ViTForImageClassification
from PIL import Image
import timm
from pathlib import Path
import os

# === Config ===
USE_MODEL = "vit-kaggle"  # or "resnext"

MODEL_PATHS = {
    "vit": "models/predict-caries-vit-asli-balance.pth",
    "resnext": "models/predict-resnext50-asli-balance.pth",
    "vit-kaggle": "models/best_vit_caries_acc-dataset-asli.pth"
}

# Load the saved state_dict
state_dict = torch.load(MODEL_PATHS[USE_MODEL], map_location='cpu')

# If the keys are wrapped in 'module.', remove it
if any(k.startswith("module.") for k in state_dict.keys()):
    new_state_dict = {k.replace("module.", ""): v for k, v in state_dict.items()}
else:
    new_state_dict = state_dict

NUM_CLASSES = 4  # healthy or caries
CLASS_LABELS = ['Dentin', 'Enamel', 'Normal', 'Pulpa']

IMG_SIZE = 224
transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize([0.5]*3, [0.5]*3)
])

# === Load Model ===
if USE_MODEL == "vit":
    model = timm.create_model('vit_base_patch16_224', pretrained=False, num_classes=NUM_CLASSES)
elif USE_MODEL == "resnext":
    model = timm.create_model('resnext50_32x4d', pretrained=False, num_classes=NUM_CLASSES)
elif USE_MODEL == "vit-kaggle":
    model = ViTForImageClassification.from_pretrained(
        'google/vit-base-patch16-224-in21k',
        num_labels=NUM_CLASSES,
        ignore_mismatched_sizes=True  # allow reshaping head
    )
else:
    raise ValueError("Unknown model type")

model.load_state_dict(new_state_dict)
model.eval()


def classify_teeth(detections):
    results = []
    for det in detections:
        image = Image.open(det["crop_path"]).convert("RGB")
        tensor = transform(image).unsqueeze(0)
        
        with torch.no_grad():
            output = model(tensor)
            logits = output.logits if hasattr(output, "logits") else output
            _, predicted = torch.max(logits, 1)
            # _, predicted = torch.max(output, 1)
            label = CLASS_LABELS[predicted.item()]

        results.append({
            "tooth_id": det["tooth_id"],
            "bbox": det["bbox"],
            "confidence": det["confidence"],
            "class_label": label,
            "crop_path": f"/static/crops/{Path(det['crop_path']).name}"
        })

    return results