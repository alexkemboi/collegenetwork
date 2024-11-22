"use client"
import React, { useState } from 'react';
import Image from "next/image";
import mlms from "../../../public/images/Back.jpg";
import Link from 'next/link';
// import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  //   const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    // Simulate an API request for sending OTP (Replace with actual logic)
    console.log(`Sending OTP to ${email}`);

    // After sending OTP, navigate to the next page (Verify OTP)
    // navigate('/verify-otp', { state: { email } });
  };

  return (
    <div className="flex h-screen">

      {/* Image Container */}
      <div className="w-1/2">
        <Image
          src={mlms}
          alt="Forgot Password"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Form Container */}
      <div className="w-1/2 p-8 bg-white rounded bg-opacity-100 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Forgot Password ?</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            <Link href="/otp" className="text-white"> Send OTP </Link>
          </button>
        </form>
      </div>


    </div>
  );
};

export default ForgotPasswordPage;
