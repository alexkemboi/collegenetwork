"use client"
import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Image from "next/image";
import mlms from "../../../public/images/Back.jpg";
import Link from 'next/link';

const VerifyOTPPage: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  //   const { state } = useLocation();
  //   const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulate OTP verification logic
    if (!otp) {
      setError('Please enter the OTP');
      return;
    }

    // Simulate OTP verification (replace with actual logic)
    // console.log(`Verifying OTP for ${state.email}`);

    // After OTP verification, navigate to Reset Password page
    // navigate('/reset-password');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numeric characters

    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));


  };



  return (
    <div className="flex h-screen">

      {/* Image Container */}
      <div className="w-1/2">
        <Image
          src={mlms}
          alt="Verify OTP"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Form Container */}
      <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4">Verify OTP</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex justify-between space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              value={otp[index] || ''}
              onChange={(e) => handleChange(e, index)}
              className="w-16 h-16 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          ))}

          <button
            type="submit"
            className="flex  w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 mt-auto"
          >
            <Link href="/newpassword" className="text-white">  Verify OTP</Link>
          </button>
        </form>
      </div>


    </div>
  );
};

export default VerifyOTPPage;