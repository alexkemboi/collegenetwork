"use client"
import React from "react";
import BookList from "../../components/BookList/page";
import { BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
const LoginPage = () => {
    return (
        <div className="bg-[#F5F5F5]  min-h-screen">
            <BrowserRouter>
                <Layout>
                    <BookList />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
export default LoginPage;