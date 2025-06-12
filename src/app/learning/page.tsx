'use client'
import LearningPage from "@/components/learning/page";
import Layout from "../layouts";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const Learning = () => {
    return (
        <div className="bg-[#F5F5F5]  min-h-screen">
            <BrowserRouter>
                <Layout>
                    <LearningPage />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
export default Learning;