type DetectionResultProps = {
    resultImage: string | null;
};

export function DetectionResult({ resultImage }: DetectionResultProps) {
    if (!resultImage) return null;

    return (
        <div className="p-4 border rounded-xl bg-white shadow">
            <p className="mb-2 font-semibold text-gray-700">Detection Result:</p>
            <img src={resultImage} alt="Detection Result" className="max-w-full max-h-[400px] rounded" />
        </div>
    );
}