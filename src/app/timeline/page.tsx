"use client"
import React from "react";
import Timeline from "../../components/timeline/page";
import { BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
const LoginPage = () => {
    return (
        <div className="bg-[#F5F5F5]  min-h-screen">
            <BrowserRouter>
                <Layout>
                    <Timeline />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
export default LoginPage;