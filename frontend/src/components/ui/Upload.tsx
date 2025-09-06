import { ChangeEvent } from 'react';

type UploadSectionProps = {
    onImageSelect: (file: File) => void;
};

export function UploadSection({ onImageSelect }: UploadSectionProps) {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageSelect(e.target.files[0]);
        }
    };

    return (
        <div className="p-4 border rounded-xl bg-white shadow">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Radiograph Panoramic Image
            </label>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
            />
        </div>
    );
}