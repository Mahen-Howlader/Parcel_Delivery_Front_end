import deliveryHistory from "@/pages/Receriver/deliveryHistory";
import IncomingParcels from "@/pages/Receriver/IncomingParcels";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
    {
        title: "Receiver Dashboard",
        items: [
                {
                title: "Incoming parcels",
                url: '/receiver/incoming',
                Component: IncomingParcels
            },
            {
                title: "Delivery Completed",
                url: '/receiver/completed-history',
                Component: deliveryHistory
            }
        ]
    }
];