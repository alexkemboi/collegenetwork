
"use client";
import SellingPage from "@/components/selling/page";
import { BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
const LoginPage = () => {
    return (

        <div className="bg-[#F5F5F5]  min-h-screen">
            <BrowserRouter>
                <Layout>
                    <SellingPage />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
export default LoginPage;