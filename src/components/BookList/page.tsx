"use client"
import React from 'react'
import { Link } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

const books: Book[] = [
  { id: 1, title: "Book One", author: "Author One", cover: "https://via.placeholder.com/150" },
  { id: 2, title: "Book Two", author: "Author Two", cover: "https://via.placeholder.com/150" },
  { id: 3, title: "Book Three", author: "Author Three", cover: "https://via.placeholder.com/150" },
];

const BookList: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <img src={book.cover} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4"/>
          <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-600">by {book.author}</p>
          <Link to={`/book/${book.id}`} className="mt-4 inline-block text-blue-600 hover:underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
