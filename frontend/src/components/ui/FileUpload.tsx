// // src/components/FileUpload.tsx
// import React, { useState } from "react";

// interface Props {
//     onResults: (data: { results: DetectionResult[]; processed_image: string }) => void;
// }

// export default function FileUpload({ onResults }: Props) {
//     const [file, setFile] = useState<File | null>(null);
//     const [loading, setLoading] = useState(false);
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const selected = e.target.files?.[0] || null;
//         setFile(selected);
//         if (selected) {
//             setPreviewUrl(URL.createObjectURL(selected));
//         }
//     };

//     const handleSubmit = async () => {
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         setLoading(true);
//         const res = await fetch("http://localhost:8000/detect", {
//             method: "POST",
//             body: formData,
//         });

//         const data = await res.json();
//         onResults(data);
//         setLoading(false);
//     };

//     return (
//         <div className="bg-white p-6 rounded shadow text-center">
//             <h2 className="text-xl font-semibold mb-4">Upload Panoramic Radiograph File</h2>
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="w-full mb-2 border px-4 py-2"
//                 placeholder="Insert picture here..."
//             />
//             {previewUrl && (
//                 <div className="mb-4">
//                     <img src={previewUrl} alt="Preview" className="mx-auto border rounded max-h-60" />
//                     <p className="text-sm text-gray-500 mt-1">{file?.name}</p>
//                 </div>
//             )}
//             <button
//                 disabled={!file || loading}
//                 onClick={handleSubmit}
//                 className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
//             >
//                 {loading ? "Detecting..." : "Detect"}
//             </button>
//         </div>
//     );
// }

// export interface DetectionResult {
//     tooth_id: string;
//     bbox: number[];
//     confidence: number;
//     class_label: string;
// }

// Alt
// // src/components/FileUpload.tsx
// import React, { useState } from "react";
// import { LoadingIndicator } from "./loading-indicator";

// interface Props {
//     onResults: (data: { results: DetectionResult[]; processed_image: string }) => void;
// }

// export default function FileUpload({ onResults }: Props) {
//     const [file, setFile] = useState<File | null>(null);
//     const [loading, setLoading] = useState(false);
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const selected = e.target.files?.[0] || null;
//         setFile(selected);
//         if (selected) {
//             setPreviewUrl(URL.createObjectURL(selected));
//         }
//     };

//     const handleSubmit = async () => {
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         setLoading(true);
//         const res = await fetch("http://localhost:8000/detect", {
//             method: "POST",
//             body: formData,
//         });

//         const data = await res.json();
//         onResults(data);
//         setLoading(false);
//     };

//     return (
//         <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
//             <h2 className="text-xl font-semibold text-gray-800">Upload Panoramic Radiograph File</h2>
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
//                    file:rounded-md file:border-0
//                    file:text-sm file:font-semibold
//                    file:bg-blue-50 file:text-blue-700
//                    hover:file:bg-blue-100"
//             />
//             {previewUrl && (
//                 <div className="mt-4">
//                     <img src={previewUrl} alt="Preview" className="mx-auto border rounded-md max-h-60 shadow" />
//                     <p className="text-sm text-gray-500 mt-2">{file?.name}</p>
//                 </div>
//             )}
//             <button
//                 disabled={!file || loading}
//                 onClick={handleSubmit}
//                 className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 disabled:bg-gray-300"
//             >
//                 {loading ? "Detecting..." : "Detect"}
//             </button>
//             {loading && <LoadingIndicator />}
//         </div>
//     );
// }

// export interface DetectionResult {
//     tooth_id: string;
//     bbox: number[];
//     confidence: number;
//     class_label: string;
// }

// Another alt
// // src/components/FileUpload.tsx
// import React, { useState } from "react";
// import { LoadingIndicator } from "./loading-indicator";

// interface Props {
//     onResults: (data: { results: DetectionResult[]; processed_image: string }) => void;
//     setPreviewUrl: (url: string | null) => void;
// }

// export default function FileUpload({ onResults, setPreviewUrl }: Props) {
//     const [file, setFile] = useState<File | null>(null);
//     const [loading, setLoading] = useState(false);

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const selected = e.target.files?.[0] || null;
//         setFile(selected);
//         if (selected) {
//             setPreviewUrl(URL.createObjectURL(selected));
//         }
//     };

//     const handleSubmit = async () => {
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         setLoading(true);
//         const res = await fetch("http://localhost:8000/detect", {
//             method: "POST",
//             body: formData,
//         });

//         const data = await res.json();
//         onResults(data);
//         setLoading(false);
//     };

//     return (
//         <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
//             <h2 className="text-xl font-semibold text-gray-800">Upload Panoramic Radiograph File</h2>
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
//                    file:rounded-md file:border-0
//                    file:text-sm file:font-semibold
//                    file:bg-blue-50 file:text-blue-700
//                    hover:file:bg-blue-100"
//             />
//             <button
//                 disabled={!file || loading}
//                 onClick={handleSubmit}
//                 className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 disabled:bg-gray-300"
//             >
//                 {loading ? "Detecting..." : "Detect"}
//             </button>
//             {loading && <LoadingIndicator />}
//         </div>
//     );
// }

// export interface DetectionResult {
//     tooth_id: string;
//     bbox: number[];
//     confidence: number;
//     class_label: string;
// }


// another another alt
// src/components/FileUpload.tsx
import React, { useState } from "react";
import { LoadingIndicator } from "./LoadingIndicator";

interface Props {
    onResults: (data: { results: DetectionResult[]; processed_image: string }) => void;
    setPreviewUrl: (url: string | null) => void;
}

export default function FileUpload({ onResults, setPreviewUrl }: Props) {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [localPreview, setLocalPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0] || null;
        setFile(selected);
        if (selected) {
            const url = URL.createObjectURL(selected);
            setLocalPreview(url);
            setPreviewUrl(url);
        }
    };

    const handleSubmit = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        const res = await fetch("http://localhost:8000/detect", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        onResults(data);
        setLoading(false);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Upload Panoramic Radiograph File</h2>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
            />
            {localPreview && (
                <div className="mt-4">
                    <img src={localPreview} alt="Preview" className="mx-auto border rounded-md max-h-60 shadow" />
                    <p className="text-sm text-gray-500 mt-2">{file?.name}</p>
                </div>
            )}
            <button
                disabled={!file || loading}
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 disabled:bg-gray-300"
            >
                {loading ? "Detecting..." : "Detect"}
            </button>
            {loading && <LoadingIndicator />}
        </div>
    );
}

export interface DetectionResult {
    tooth_id: string;
    bbox: number[];
    confidence: number;
    class_label: string;
}
