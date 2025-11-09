import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HomePage from "@/pages/HomePage";
import { generateRoutes } from "@/utils/genaretRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { senderSidebarItems } from "./senderSidebarItem";
import { adminSidebarItems } from "./adminSidebarItem";
import { receiverSidebarItems } from "./receiverSidebarItem";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import TrackingDetails from "@/pages/TrakingDetails";
import ErrorPage from "@/pages/ErrorPage";
import Loading from "@/components/Loading";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AboutPage from "@/pages/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    loader: async () => <Loading />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to={"/admin/analytics"} /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: DashboardLayout,
    path: "/sender",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to={"/sender/analytics"} /> },
      ...generateRoutes(senderSidebarItems),
    ],
  },
  {
    Component: DashboardLayout,
    path: "/receiver",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to={"/receiver/incoming"} /> },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    path: "/tracking/:id",
    Component: TrackingDetails,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
