import Sender from "@/pages/Sender/Sender";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
    {
        title: "History",
        items: [
            {
                title: "Send",
                url: '/sender/analytics',
                Component: Sender
            }
        ]
    },
    {
        title: "History",
        items: [
            {
                title: "Send",
                url: '/sender/sender',
                Component: Sender
            }
        ]
    }
]