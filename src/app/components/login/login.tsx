"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement login logic here (e.g., API call)
        console.log("Logging in with", { email, password });
    };

    return (
        <div className="flex min-h-screen">
            {/* Left side of the screen (empty or any content you want to show) */}
            <div className="flex-1 bg-gray-100"></div>

            {/* Right side of the screen (this takes up 50% of the screen width) */}
            <div className="display: flex height: 100vh justify-content: flex-end align-items: center ">
                <div className="bg-white flex-direction:column align-items:center width:50vw p-20 gap:10px border-radius: 20px rounded-lg shadow-md h-100vh box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)">
                    <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
                        MASOMO LIBRARY MANAGEMENT SYSTEM
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-10">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don’t have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
