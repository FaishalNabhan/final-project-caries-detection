// src/components/ResultTable.tsx
import React from "react";

export interface DetectionResult {
    tooth_id: string;
    bbox: number[];
    confidence: number;
    class_label: string;
    crop_path?: string;
}

interface Props {
    data: DetectionResult[];
}

export default function ResultTable({ data }: Props) {
    return (
        <div className="mt-10 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Detection Result</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-sm text-center border border-gray-200">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="border px-4 py-2">Number</th>
                            <th className="border px-4 py-2">Image</th>
                            <th className="border px-4 py-2">Caries Type</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((result, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border px-4 py-2 font-medium text-gray-700">{result.tooth_id}</td>
                                <td className="border px-4 py-2">
                                    <img
                                        src={`http://localhost:8000${result.crop_path}`}
                                        alt={`Tooth ${result.tooth_id}`}
                                        className="mx-auto h-24 w-auto rounded border"
                                    />
                                </td>
                                <td className="border px-4 py-2 text-gray-700 font-semibold">{result.class_label}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
