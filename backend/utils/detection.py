from ultralytics import YOLO
import cv2
import os
from pathlib import Path
from PIL import Image
import uuid

# Load the YOLOv8 model once
YOLO_MODEL_PATH = "models/best.pt"
yolo_model = YOLO(YOLO_MODEL_PATH)

CROPPED_DIR = "temp_uploads/crops"
PROCESSED_DIR = "temp_uploads/processed"
os.makedirs(CROPPED_DIR, exist_ok=True)
os.makedirs(PROCESSED_DIR, exist_ok=True)

# Class index to odontogram number
class_dict = {
    0: "11", 1: "12", 2: "13", 3: "14", 4: "15", 5: "16", 6: "17", 7: "18",
    8: "21", 9: "22", 10: "23", 11: "24", 12: "25", 13: "26", 14: "27", 15: "28",
    16: "31", 17: "32", 18: "33", 19: "34", 20: "35", 21: "36", 22: "37", 23: "38",
    24: "41", 25: "42", 26: "43", 27: "44", 28: "45", 29: "46", 30: "47", 31: "48"
}

def run_yolo_detection(image_path):
    # Run YOLOv8 on the image
    results = yolo_model(image_path, save=False, save_crop=False, conf=0.3)
    image = cv2.imread(image_path)

    detections = []

    for i, box in enumerate(results[0].boxes.xyxy.tolist()):
        x1, y1, x2, y2 = map(int, box)
        confidence = float(results[0].boxes.conf[i])
        class_id = int(results[0].boxes.cls[i])

        tooth_number = class_dict.get(class_id, f"unknown_{i+1}")

        # Crop and save
        cropped = image[y1:y2, x1:x2]
        crop_path = os.path.join(CROPPED_DIR, f"{tooth_number}.jpg")
        cv2.imwrite(crop_path, cropped)
        # unique_id = str(uuid.uuid4())[:8]  # short UUID for uniqueness
        # filename_base = Path(image_path).stem  # original image name (without extension)
        # crop_filename = f"{filename_base}_{tooth_number}_{unique_id}.jpg"
        # crop_path = os.path.join(CROPPED_DIR, crop_filename)
        # cv2.imwrite(crop_path, cropped)


        detections.append({
            "tooth_id": tooth_number,
            "bbox": [x1, y1, x2, y2],
            "confidence": confidence,
            "crop_path": crop_path
        })

    # Save post-processed full image with bounding boxes and labels
    boxed_image = results[0].plot()
    result_name = Path(image_path).stem + "_boxed.jpg"
    boxed_path = os.path.join(PROCESSED_DIR, result_name)
    Image.fromarray(boxed_image).save(boxed_path)

    return detections
