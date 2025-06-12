"use client"
import ContributionPage from "@/components/contribution/page";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
const Contributions = () => {
    return (

        <div className="bg-[#F5F5F5]  min-h-screen">
            <BrowserRouter>
                <Layout>
                    <ContributionPage />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
export default Contributions;