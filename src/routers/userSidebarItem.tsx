import Sending from "@/pages/User/Sending";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "User Dashboard",
        items: [
            {
                title: "Sending",
                url: '/user/sending',
                Component: Sending
            }
        ]
    }
];