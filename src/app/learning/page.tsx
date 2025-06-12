'use client'
import LearningPage from "@/components/learning/page";
import Layout from "../layouts";
import React from "react";
const Learning = () => {
    return (
        <div className="bg-[#F5F5F5]  min-h-screen">

            <Layout>
                <LearningPage />
            </Layout>

        </div>
    );
};
export default Learning;