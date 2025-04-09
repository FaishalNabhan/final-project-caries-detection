import { DetectionResult } from '@/components/detection-result';
import { LoadingIndicator } from '@/components/loading-indicator';
import { PreviewSection } from '@/components/preview';
import { UploadSection } from '@/components/upload';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleDetection = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/detect', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResultImage(`data:image/jpeg;base64,${data.result}`); // or data.url depending on backend
    } catch (error) {
      console.error('Detection failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <UploadSection onImageSelect={handleImageSelect} />
      <PreviewSection imageUrl={previewUrl} />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleDetection}
        disabled={loading || !selectedFile}
      >
        Detect Caries
      </button>
      {loading && <LoadingIndicator />}
      <DetectionResult resultImage={resultImage} />
    </div>
  );
}
