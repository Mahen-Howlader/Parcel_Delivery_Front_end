import * as React from "react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getSidebarItems } from "@/utils/getSidebarItems"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Link, useLocation } from "react-router";

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const data = {
    navMain: getSidebarItems(userData?.data?.role)
  };
  const location = useLocation();
  return (
    <Sidebar {...props}>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <div className="flex justify-center">
          <Link className="text-4xl text-logo text-black" to={"/"}>
            Creation
          </Link>
        </div>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-center mb-5 text-xl">{item.title.toLocaleUpperCase()}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem className={location.pathname === item.url ? "bg-gray-300" : "hover:bg-gray-300"} key={item.title}>
                    <SidebarMenuButton asChild >
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
};
