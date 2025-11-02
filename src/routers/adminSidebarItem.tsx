import Sender from "@/pages/Sender/Sender";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems : ISidebarItem[] = [
   {
        title: "Dashboard",
        items: [
            {
                title: "Send",
                url: '/admin/sender',
                Component: Sender
            }
        ]
    },
    {
        title: "Parcel Management",
        items: [
            {
                title: "Send",
                url: '/admin/sender',
                Component: Sender
            }
        ]
    }
]