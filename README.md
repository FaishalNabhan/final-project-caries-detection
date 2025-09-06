# Caries Detection Project

This is a final project for detecting dental caries using a YOLO+CNN pipeline. The frontend is built with React, TypeScript, and Vite, while the backend uses Python with YOLO for tooth detection and CNN for caries classification.

## Project Structure

- `frontend/`: React/TypeScript frontend with Vite and Tailwind CSS.
- `backend/`: Python backend with YOLO and CNN for caries detection.

## Prerequisites

- Node.js (&gt;=18.x)
- Python (&gt;=3.8)
- Git

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd final-project-caries-detection
```

### 2. Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

### 3. Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate.ps1
   ```
   If you got an error when attempting to run the Activate.ps1 script, you need to run the following command:
   ```bash
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
   After you run the above command, try to run the script again to know if it worked.
3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
4. Start the backend server (adjust command based on your app, e.g., FastAPI):

   ```bash
   uvicorn main:app --reload
   ```
5. The backend API will be available at `http://localhost:8000`.

### 4. Usage

- Visit `http://localhost:5173` to access the landing page.
- Navigate to `/predict` to upload dental radiographs and view caries detection results.
- The backend processes images using YOLO for tooth detection and CNN for caries classification.

### Notes

- Ensure the `models/` folder contains the necessary YOLO and CNN model weights (not included in the repository).
- Place model files in `backend/models/` or update paths in the backend code.

## Contact

For issues or questions, contact faishalnabhan28@gmail.com.