import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HomePage from "@/pages/HomePage";
import { generateRoutes } from "@/utils/genaretRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { senderSidebarItems } from "./senderSidebarItem";
import { adminSidebarItems } from "./adminSidebarItem";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { userSidebarItems } from "./userSidebarItem";


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
        path: "/user",
        children: [
            { index: true, element: <Navigate to={"/user/sending"}></Navigate> },
            ...generateRoutes(userSidebarItems)
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
])