"use client";
import React, { useState } from "react";
import { Bell, ThumbsUp, FileText, Lock } from "lucide-react";

const notifications = [
    {
        id: 1,
        text: "Jane liked your post.",
        type: "like",
        time: "2 mins ago",
        read: false,
    },
    {
        id: 2,
        text: "New article available in your college board.",
        type: "article",
        time: "15 mins ago",
        read: false,
    },
    {
        id: 3,
        text: "Your password was changed successfully.",
        type: "security",
        time: "1 hour ago",
        read: true,
    },
];

const iconMap = {
    like: <ThumbsUp className="text-pink-600 w-6 h-6" />,
    article: <FileText className="text-blue-600 w-6 h-6" />,
    security: <Lock className="text-green-600 w-6 h-6" />,
};

const NotificationsPage = () => {
    const [notes, setNotes] = useState(notifications);

    const markAsRead = (id: number) => {
        setNotes(
            notes.map((n) =>
                n.id === id ? { ...n, read: true } : n
            )
        );
    };

    return (
        <div className="flex justify-center mr-20 h-[80vh] overflow-y-auto">
            <div className="w-full p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-extrabold text-blue-700">🔔 Notifications</h1>
                </div>

                <ul className="space-y-4">
                    {notes.map((note) => (
                        <li
                            key={note.id}
                            onClick={() => markAsRead(note.id)}
                            className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 shadow hover:shadow-md hover:bg-gray-50 ${note.read ? "bg-gray-100" : "bg-blue-50"
                                }`}
                        >
                            <div className="mt-1">
                                {iconMap[note.type as keyof typeof iconMap] || <Bell className="text-gray-500 w-6 h-6" />}
                            </div>
                            <div className="flex-1">
                                <p className={`text-sm ${note.read ? "text-gray-600" : "text-black font-semibold"}`}>
                                    {note.text}
                                </p>
                                <span className="text-xs text-gray-400">{note.time}</span>
                            </div>
                            {!note.read && (
                                <span className="ml-2 px-2 py-0.5 text-xs font-bold bg-blue-600 text-white rounded-full">
                                    New
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NotificationsPage;
