import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routers/adminSidebarItem";
import { receiverSidebarItems } from "@/routers/receiverSidebarItem";
import { senderSidebarItems } from "@/routers/senderSidebarItem";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.admin:
            return [...adminSidebarItems];
        case role.sender:
            return [...senderSidebarItems];
        case role.receiver:
            return [...receiverSidebarItems];
        default:
            return [];
    };
};