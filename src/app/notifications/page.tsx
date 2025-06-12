
"use client"
import { BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import NotificationsPage from "@/components/notification/page";
const Notification = () => {
    return (

        <div className="bg-[#F5F5F5]  min-h-screen">
            <BrowserRouter>
                <Layout>
                    <NotificationsPage />
                </Layout>
            </BrowserRouter>
        </div>
    );
};
export default Notification;