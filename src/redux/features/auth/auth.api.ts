import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ILogin, IRegister } from "@/types/auth.types";

const authApi = baseApi.injectEndpoints({
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
            })
        })
    })
})


export const { useRegisterMutation, useLoginMutation, useUserInfoQuery } = authApi;