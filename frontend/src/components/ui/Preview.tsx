type PreviewSectionProps = {
    imageUrl: string | null;
};

export function PreviewSection({ imageUrl }: PreviewSectionProps) {
    if (!imageUrl) return null;

    return (
        <div className="p-4 border rounded-xl bg-white shadow">
            <p className="mb-2 font-semibold text-gray-700">Preview:</p>
            <img src={imageUrl} alt="Preview" className="max-w-full max-h-[300px] rounded" />
        </div>
    );
}