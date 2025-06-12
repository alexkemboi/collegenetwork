"use client";
import React, { useState } from "react";

type Post = {
  id: number;
  user: string;
  content: string;
  likes: number;
  liked: boolean;
  comments: string[];
};

const TimelinePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "John Doe",
      content: "Excited to join the College Network!",
      likes: 0,
      liked: false,
      comments: [],
    },
    {
      id: 2,
      user: "Jane Smith",
      content: "Check out my latest tutorial on HTML basics.",
      likes: 2,
      liked: true,
      comments: ["Great post!", "Very helpful!"],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState("");
  const [newComment, setNewComment] = useState<{ [id: number]: string }>({});

  const handlePost = () => {
    if (!newPost.trim()) return;
    const newEntry: Post = {
      id: Date.now(),
      user: "Current User",
      content: newPost,
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (id: number, content: string) => {
    setEditingId(id);
    setEditingContent(content);
  };

  const handleUpdate = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, content: editingContent } : post
      )
    );
    setEditingId(null);
    setEditingContent("");
  };

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          }
          : post
      )
    );
  };

  const handleComment = (id: number) => {
    if (!newComment[id]?.trim()) return;
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, newComment[id]] }
          : post
      )
    );
    setNewComment({ ...newComment, [id]: "" });
  };

  const handleShare = (post: Post) => {
    alert(`Shared: "${post.content}"`);
  };

  return (
    <div className="flex justify-center mr-20">
      <div className="w-full h-[80vh] overflow-y-auto p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          College Timeline
        </h1>

        {/* New Post Box */}
        <div className="mb-6">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handlePost}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-200"
            >
              Post
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 bg-gray-100 rounded-xl shadow-md space-y-2"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {post.user}
              </h2>

              {editingId === post.id ? (
                <textarea
                  className="w-full p-2 border rounded"
                  rows={3}
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
              ) : (
                <p className="text-gray-700">{post.content}</p>
              )}

              <div className="flex flex-wrap gap-2 mt-2">
                {editingId === post.id ? (
                  <button
                    onClick={() => handleUpdate(post.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(post.id, post.content)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`px-3 py-1 rounded text-white ${post.liked
                      ? "bg-pink-600 hover:bg-pink-700"
                      : "bg-gray-400 hover:bg-gray-500"
                    }`}
                >
                  ❤️ {post.likes}
                </button>
                <button
                  onClick={() => handleShare(post)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Share
                </button>
              </div>

              {/* Comments */}
              <div className="mt-4 space-y-2">
                <h3 className="font-medium text-gray-700">Comments:</h3>
                {post.comments.map((comment, idx) => (
                  <p key={idx} className="text-sm text-gray-600 pl-2">
                    • {comment}
                  </p>
                ))}

                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      setNewComment({ ...newComment, [post.id]: e.target.value })
                    }
                    className="flex-1 px-3 py-1 border rounded"
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
