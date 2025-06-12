"use client";
import React, { useState } from "react";

const resources = [
    {
        id: 1,
        title: "How to Set Up Apache Server",
        description: "Step-by-step guide on setting up an Apache web server.",
        type: "video",
        url: "https://www.youtube.com/embed/example1",
    },
    {
        id: 2,
        title: "Introduction to CKEditor",
        description: "Learn how to integrate CKEditor into your forms.",
        type: "video",
        url: "https://www.youtube.com/embed/example2",
    },
    {
        id: 3,
        title: "JavaScript Basics Notes (PDF)",
        description: "A complete PDF note for JavaScript beginners.",
        type: "pdf",
        url: "/resources/javascript-basics.pdf",
    },
    {
        id: 4,
        title: "Data Structures Handbook (PDF)",
        description: "A PDF guide covering basic to advanced data structures.",
        type: "pdf",
        url: "/resources/data-structures.pdf",
    },
];

const LearningPage = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <div className="flex justify-center mr-20">
            <div className="w-full h-[80vh] overflow-y-auto p-6 bg-white rounded-2xl shadow-lg">
                <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
                    Learning Resources
                </h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {resources.map((res) => (
                        <div
                            key={res.id}
                            className="p-5 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{res.title}</h2>
                            <p className="text-gray-600 mt-1 mb-4">{res.description}</p>

                            {res.type === "video" ? (
                                <button
                                    onClick={() => setSelectedVideo(res.url)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all"
                                >
                                    ▶️ View Video
                                </button>
                            ) : (
                                <a
                                    href={res.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full inline-block transition-all"
                                >
                                    📄 View PDF
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Modal for video preview */}
                {selectedVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="bg-white rounded-xl p-4 max-w-3xl w-full relative">
                            <button
                                className="absolute top-2 right-3 text-red-500 hover:text-red-700 text-2xl"
                                onClick={() => setSelectedVideo(null)}
                            >
                                &times;
                            </button>
                            <iframe
                                src={selectedVideo}
                                className="w-full h-96 rounded"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LearningPage;
