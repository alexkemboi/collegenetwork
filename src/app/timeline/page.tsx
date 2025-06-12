"use client"
import React from "react";
import Timeline from "../../components/timeline/page";
import Layout from "../layouts";
const LoginPage = () => {
    return (
        <div className="bg-[#F5F5F5]  min-h-screen">

            <Layout>
                <Timeline />
            </Layout>

        </div>
    );
};
export default LoginPage;