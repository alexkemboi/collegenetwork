"use client";
import React, { useState } from "react";

type Item = {
    id: number;
    name: string;
    description: string;
    price: string;
};

const SellingPage = () => {
    const [item, setItem] = useState<Omit<Item, "id">>({
        name: "",
        description: "",
        price: "",
    });
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: "Laptop", description: "Dell Inspiron, 16GB RAM", price: "55000" },
        { id: 2, name: "Textbook", description: "Physics Form 3", price: "500" },
    ]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedItem, setEditedItem] = useState<Omit<Item, "id">>({
        name: "",
        description: "",
        price: "",
    });

    const handleAdd = () => {
        if (item.name && item.description && item.price) {
            setItems([{ ...item, id: Date.now() }, ...items]);
            setItem({ name: "", description: "", price: "" });
        }
    };

    const handleDelete = (id: number) => {
        setItems(items.filter((i) => i.id !== id));
    };

    const handleEdit = (item: Item) => {
        setEditingId(item.id);
        setEditedItem({
            name: item.name,
            description: item.description,
            price: item.price,
        });
    };

    const handleUpdate = (id: number) => {
        setItems(
            items.map((i) => (i.id === id ? { ...i, ...editedItem } : i))
        );
        setEditingId(null);
        setEditedItem({ name: "", description: "", price: "" });
    };

    return (
        <div className="flex justify-center mr-20">
            <div className="w-full h-[80vh] overflow-y-auto p-6 bg-white rounded-2xl shadow-lg">
                <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
                    Sell or Buy Items
                </h1>

                {/* Input Form */}
                <div className="grid gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Item Name"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={item.name}
                        onChange={(e) => setItem({ ...item, name: e.target.value })}
                    />
                    <textarea
                        placeholder="Description"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        value={item.description}
                        onChange={(e) => setItem({ ...item, description: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Price (KES)"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={item.price}
                        onChange={(e) => setItem({ ...item, price: e.target.value })}
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={handleAdd}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all"
                        >
                            Post Item
                        </button>
                    </div>
                </div>

                {/* Items Table */}
                {items.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-blue-100 text-blue-700">
                                    <th className="text-left px-4 py-3">Item Name</th>
                                    <th className="text-left px-4 py-3">Description</th>
                                    <th className="text-left px-4 py-3">Price (KES)</th>
                                    <th className="text-left px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((i) => (
                                    <tr key={i.id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-800">
                                            {editingId === i.id ? (
                                                <input
                                                    value={editedItem.name}
                                                    onChange={(e) =>
                                                        setEditedItem({ ...editedItem, name: e.target.value })
                                                    }
                                                    className="border rounded p-1 w-full"
                                                />
                                            ) : (
                                                i.name
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">
                                            {editingId === i.id ? (
                                                <input
                                                    value={editedItem.description}
                                                    onChange={(e) =>
                                                        setEditedItem({ ...editedItem, description: e.target.value })
                                                    }
                                                    className="border rounded p-1 w-full"
                                                />
                                            ) : (
                                                i.description
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-green-600 font-semibold">
                                            {editingId === i.id ? (
                                                <input
                                                    value={editedItem.price}
                                                    onChange={(e) =>
                                                        setEditedItem({ ...editedItem, price: e.target.value })
                                                    }
                                                    className="border rounded p-1 w-full"
                                                />
                                            ) : (
                                                i.price
                                            )}
                                        </td>
                                        <td className="px-4 py-3 space-x-2">
                                            {editingId === i.id ? (
                                                <button
                                                    onClick={() => handleUpdate(i.id)}
                                                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleEdit(i)}
                                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                                >
                                                    Edit
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleDelete(i.id)}
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
                )}
            </div>
        </div>
    );
};

export default SellingPage;
