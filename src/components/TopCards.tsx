'use client'
import React from 'react'

const TopCards = () => {
    return (
        <div className="grid lg:grid-cols-8 gap-4 py-4 sm:w-full bg-transparent">
            {/* Total Connections Card */}
            <div className="lg:col-span-2 col-span-1 shadow-lg bg-[#F5F5F5] flex justify-between w-full border rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-blue-400 border-r-4">
                <div className="flex flex-col justify-center w-full m-4">
                    <p className="text-blue-900 text-sm font-bold">Total Connections</p>
                    <div className="flex w-auto h-1 mt-2">
                        <div className="bg-blue-200 w-3/4 h-1"></div>
                        <div className="bg-gray-50 w-1/4 h-1"></div>
                    </div>
                </div>
                <p className="bg-blue-200 flex justify-center items-center p-2">
                    <span className="text-sm font-bold text-blue-900">1,245</span>
                </p>
            </div>

            {/* Messages Sent Card */}
            <div className="lg:col-span-2 col-span-1 shadow-lg bg-[#F5F5F5] flex justify-between w-full border rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-purple-400 border-r-4">
                <div className="flex flex-col justify-center w-full m-4">
                    <p className="text-blue-900 text-sm font-bold">Messages Sent</p>
                    <div className="flex w-auto h-1 mt-2">
                        <div className="bg-purple-200 w-2/3 h-1"></div>
                        <div className="bg-gray-50 w-1/3 h-1"></div>
                    </div>
                </div>
                <p className="bg-purple-200 flex justify-center items-center p-2">
                    <span className="text-sm font-bold text-blue-900">3,580</span>
                </p>
            </div>

            {/* Posts Shared Card */}
            <div className="lg:col-span-2 col-span-1 shadow-lg bg-[#F5F5F5] flex justify-between w-full border rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-green-500 border-r-4">
                <div className="flex flex-col justify-center w-full m-4">
                    <p className="text-blue-900 text-sm font-bold">Posts Shared</p>
                    <div className="flex w-auto h-1 mt-2">
                        <div className="bg-green-200 w-3/5 h-1"></div>
                        <div className="bg-gray-50 w-2/5 h-1"></div>
                    </div>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2">
                    <span className="text-sm font-bold text-blue-900">980</span>
                </p>
            </div>

            {/* Tutorials Uploaded Card */}
            <div className="lg:col-span-2 col-span-1 shadow-lg bg-[#F5F5F5] flex justify-between w-full border rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-yellow-400 border-r-4">
                <div className="flex flex-col justify-center w-full m-4">
                    <p className="text-blue-900 text-sm font-bold">Tutorials Uploaded</p>
                    <div className="flex w-auto h-1 mt-2">
                        <div className="bg-yellow-200 w-1/2 h-1"></div>
                        <div className="bg-gray-50 w-1/2 h-1"></div>
                    </div>
                </div>
                <p className="bg-yellow-200 flex justify-center items-center p-2">
                    <span className="text-sm font-bold text-blue-900">310</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards;
