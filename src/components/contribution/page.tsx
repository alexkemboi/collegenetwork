"use client";
import React, { useState } from "react";

type Contribution = {
    id: number;
    content: string;
};

const ContributionPage = () => {
    const [contribution, setContribution] = useState("");
    const [contributions, setContributions] = useState<Contribution[]>([
        { id: 1, content: "📘 Complete JavaScript Notes - [PDF link]" },
        { id: 2, content: "📺 Data Structures Playlist (YouTube) - Highly recommended!" },
    ]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedContent, setEditedContent] = useState("");
    const [viewingContent, setViewingContent] = useState<string | null>(null);

    const handleSubmit = () => {
        if (contribution.trim()) {
            const newEntry: Contribution = {
                id: Date.now(),
                content: contribution.trim(),
            };
            setContributions([newEntry, ...contributions]);
            setContribution("");
            alert("🎉 Thank you for your contribution!");
        }
    };

    const handleDelete = (id: number) => {
        setContributions(contributions.filter((c) => c.id !== id));
    };

    const handleEdit = (id: number, content: string) => {
        setEditingId(id);
        setEditedContent(content);
    };

    const handleUpdate = (id: number) => {
        setContributions(
            contributions.map((c) =>
                c.id === id ? { ...c, content: editedContent } : c
            )
        );
        setEditingId(null);
        setEditedContent("");
    };

    return (
        <div className="flex justify-center mr-20">
            <div className="w-full h-[80vh] overflow-y-auto p-6 bg-white rounded-2xl shadow-lg">
                <h1 className="text-3xl font-extrabold text-blue-800 text-center mb-6">
                    📚 Contribute a Resource
                </h1>

                {/* Input Box */}
                <textarea
                    className="w-full p-4 border border-blue-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Share notes, tutorials, videos, or links here..."
                    value={contribution}
                    onChange={(e) => setContribution(e.target.value)}
                />
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200"
                    >
                        Submit
                    </button>
                </div>

                {/* Contributions Table */}
                {contributions.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            🗂️ Previous Contributions
                        </h2>
                        <div className="h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-inner">
                            <table className="min-w-full table-auto text-left">
                                <thead className="bg-blue-50 sticky top-0">
                                    <tr>
                                        <th className="px-4 py-3 text-blue-700 font-medium">#</th>
                                        <th className="px-4 py-3 text-blue-700 font-medium">Contribution</th>
                                        <th className="px-4 py-3 text-blue-700 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contributions.map((c, index) => (
                                        <tr
                                            key={c.id}
                                            className="border-t hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-4 py-3 font-semibold text-gray-700">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-3 text-gray-700 w-2/3">
                                                {editingId === c.id ? (
                                                    <input
                                                        type="text"
                                                        className="w-full p-2 border rounded"
                                                        value={editedContent}
                                                        onChange={(e) =>
                                                            setEditedContent(e.target.value)
                                                        }
                                                    />
                                                ) : (
                                                    <span className="block truncate">{c.content}</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 space-x-2 whitespace-nowrap">
                                                {editingId === c.id ? (
                                                    <button
                                                        onClick={() => handleUpdate(c.id)}
                                                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                                    >
                                                        Save
                                                    </button>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => setViewingContent(c.content)}
                                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            onClick={() => handleEdit(c.id, c.content)}
                                                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                                        >
                                                            Edit
                                                        </button>
                                                    </>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(c.id)}
                                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* View Modal */}
                {viewingContent && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-xl shadow-xl max-w-xl w-full p-6 relative">
                            <button
                                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
                                onClick={() => setViewingContent(null)}
                            >
                                &times;
                            </button>
                            <h3 className="text-xl font-bold text-blue-700 mb-4">
                                📖 Contribution Details
                            </h3>
                            <p className="text-gray-800 whitespace-pre-wrap">
                                {viewingContent}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContributionPage;
