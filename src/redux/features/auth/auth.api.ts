import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ILogin, IRegister } from "@/types/auth.types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<IResponse<null>, IRegister>({
            query: (userInfo) => ({
                url: "/auth/register",
                method: 'POST',
                data: userInfo
            })
        }),
        login: builder.mutation<IResponse<null>, ILogin>({
            query: (userData) => ({
                url: "/auth/login",
                method: "POST",
                data: userData
            })
        }),
        userInfo: builder.query({
            query: () => ({
                url: "/users/me",
                method: "GET",
            }),
            providesTags: ["USER"]
        }),
        userLogout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            invalidatesTags: ['USER']
        })
    })
})


export const { useRegisterMutation, useLoginMutation, useUserInfoQuery, useUserLogoutMutation } = authApi;