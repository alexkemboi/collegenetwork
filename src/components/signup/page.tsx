"use client"
import React, { useState } from 'react';
import Image from "next/image";
import mlms from "../../../public/images/mlms.jpg";
import Link from 'next/link';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }

    setError('');
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setSuccess('Signup successful! Redirecting...');
        setError('');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        // Redirect to login or another page after a short delay
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center w-full">
      {/* Left Section: Image */}
      <div className="bg-red-900 w-2/3 h-full">
        <Image
          src={mlms}
          alt="Description"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section: Form */}
      <div className="bg-white w-1/3 h-full flex items-center">
        <form className="form mx-auto max-w-lg bg-white p-6 rounded-lg" onSubmit={handleSubmit}>
          <p className="title text-2xl font-bold text-center text-blue-800 mb-4">
            MASOMO SIGNUP
          </p>
          <p className="message text-center text-gray-600 mb-6">
            Signup now and get full access to our app.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <label className="flex-1">
              <input
                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex-1">
              <input
                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label className="block mb-4">
            <input
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            <input
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            <input
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          {success && <p className="text-green-600 text-center mb-4">{success}</p>}
          <button
            className="submit w-full p-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 mb-4"
            type="submit"
          >
            Submit
          </button>
          <p className="signin text-center text-gray-600">
            Already have an account?{" "}
            <Link className="text-blue-600" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
