"use client"
import React, { useState } from 'react';
import Image from "next/image";
import mlms from "../../../public/images/mlms.jpg";
import Link from 'next/link';

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  //   const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate password reset logic
    console.log('Resetting password...');

    // After password reset, navigate to login or home page
    // navigate('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Image Container (Left Half) */}
      <div className="w-1/2">
        <Image
          src={mlms}
          alt="Reset Password"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container (Right Half) */}
      <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-6">Set New Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm flex flex-col space-y-4"
        >
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >

            <Link href="/login" className="text-white "> Reset Password</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;