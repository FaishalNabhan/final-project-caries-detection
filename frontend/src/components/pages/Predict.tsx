import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import FileUpload from "../ui/FileUpload";
import ResultTable, { DetectionResult } from "../ui/ResultTable";
import { DetectionResult as DetectionResultImage } from "../ui/DetectionResult";

const Predict: React.FC = () => {
    const [results, setResults] = useState<DetectionResult[]>([]);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleResults = (data: {
        results: DetectionResult[];
        processed_image: string;
    }) => {
        setResults(data.results);
        setImageUrl(`http://localhost:8000${data.processed_image}`);
    };

    return (
        <div className="bg-[#fffdf9] text-primary min-h-screen">
            <Navbar variant="predict" />
            <main className="max-w-4xl mt-12 mx-auto py-10 px-4 space-y-8">
                <FileUpload onResults={handleResults} setPreviewUrl={setPreviewUrl} />
                <DetectionResultImage resultImage={imageUrl} />
                {results.length > 0 && <ResultTable data={results} />}
            </main>
        </div>
    );
};

export default Predict;