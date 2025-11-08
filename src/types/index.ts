import type { ComponentType } from "react";

export interface ISidebarItem {
    title: string;
    items: [
        {
            title: string,
            url: string,
            Component: ComponentType
        }
    ]
};

export interface IResponse<T>{
  statusCode: number
  success: boolean
  data: T
  message: string
};

export type TRole = "ADMIN" | "SENDER" | "USER";
