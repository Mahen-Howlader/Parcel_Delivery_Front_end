import { Outlet } from "react-router";

import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";

function DashboardLayout() {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <Outlet></Outlet>
                </SidebarInset>
            </SidebarProvider>

        </div>
    );
}

export default DashboardLayout;