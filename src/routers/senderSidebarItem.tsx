import Sender from "@/pages/Sender/Sender";
import SenderAnalytics from "@/pages/Sender/SenderAnalytics";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
    {
        title: "Sender Sidebar",
        items: [
            {
                title: "Analytics",
                url: '/sender/analytics',
                Component: SenderAnalytics
            }
        ]
    },
    {
        title: "History",
        items: [
            {
                title: "Sending Parcel",
                url: '/sender/create-parcel',
                Component: Sender
            }
        ]
    }
]