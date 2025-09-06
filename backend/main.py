from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List
import shutil
import os
import uuid
from pathlib import Path
import glob

from utils.detection import run_yolo_detection
from utils.classifier import classify_teeth

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "temp_uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Serve static files (for full image preview and crop access)
app.mount("/static", StaticFiles(directory=UPLOAD_DIR), name="static")

class DetectionResult(BaseModel):
    tooth_id: str
    bbox: List[int]
    confidence: float
    class_label: str  # "healthy" or "caries"
    crop_path: str  # Path to the cropped tooth image

class DetectionResponse(BaseModel):
    filename: str
    processed_image: str
    results: List[DetectionResult]

def clear_temp_uploads():
    folders = ["temp_uploads", "temp_uploads/crops", "temp_uploads/processed"]
    for folder in folders:
        for file in glob.glob(f"{folder}/*"):
            if os.path.isfile(file):
                os.remove(file)

@app.post("/detect", response_model=DetectionResponse)
async def detect_caries(file: UploadFile = File(...)):
    # 🧹 Clear previous detection attempt
    clear_temp_uploads()

    # Save uploaded image to a temporary path
    file_id = str(uuid.uuid4())
    upload_path = os.path.join(UPLOAD_DIR, f"{file_id}_{file.filename}")
    with open(upload_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # 1. Run YOLOv8 to get bounding boxes and crops
    detections = run_yolo_detection(upload_path)

    # 2. Run CNN classifier on each cropped tooth image
    classification_results = classify_teeth(detections)

    # 3. Get processed image name from detection filename
    result_image_filename = Path(upload_path).stem + "_boxed.jpg"

    # 4. Build structured response
    response = DetectionResponse(
        filename=file.filename,
        processed_image=f"/static/processed/{result_image_filename}",
        results=classification_results
    )
    return JSONResponse(content=response.dict())