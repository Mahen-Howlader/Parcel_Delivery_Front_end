import AllParcel from "@/pages/Admin/AllParcel";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Admin Dashboard",
        items: [
            {
                title: "All User",
                url: '/admin/analytics',
                Component: Analytics
            },
            {
                title: "All Parcel",
                url: '/admin/all-parcel',
                Component: AllParcel
            }
        ]
    }
]