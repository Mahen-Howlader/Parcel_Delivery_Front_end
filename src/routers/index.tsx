import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HomePage from "@/pages/HomePage";
import { generateRoutes } from "@/utils/genaretRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { senderSidebarItems } from "./senderSidebarItem";
import { adminSidebarItems } from "./adminSidebarItem";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { receiverSidebarItems } from "./receiverSidebarItem";
import TrackingDetails from "@/pages/TrakingDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    },
    {
        Component: DashboardLayout,
        path: "/admin",
        children: [
            { index: true, element: <Navigate to={"/admin/analytics"}></Navigate> },
            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
        Component: DashboardLayout,
        path: "/sender",
        children: [
            { index: true, element: <Navigate to={"/sender/analytics"}></Navigate> },
            ...generateRoutes(senderSidebarItems)
        ]
    },
    {
        Component: DashboardLayout,
        path: "/receiver",
        children: [
            { index: true, element: <Navigate to={"/receiver/incoming"}></Navigate> },
            ...generateRoutes(receiverSidebarItems)
        ]
    },
    {
        Component: Login,
        path: "/login"
    },
    {
        Component: Register,
        path: "/register"
    },
    {
        Component: TrackingDetails,
        path: "/tracking/:id"
    },
])