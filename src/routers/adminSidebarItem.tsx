import AllParcel from "@/pages/Admin/AllParcel";
import AllUser from "@/pages/Admin/AllUser";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Admin Dashboard",
        items: [
            {
                title: "Analytics",
                url: '/admin/analytics',
                Component: Analytics
            },
            {
                title: "All User",
                url: '/admin/all-user',
                Component: AllUser
            },
            {
                title: "All Parcel",
                url: '/admin/all-parcel',
                Component: AllParcel
            }
        ]
    }
];