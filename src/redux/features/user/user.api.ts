import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allUser: builder.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
            providesTags: ["USER"]
        }),
        userBlockUnblock: builder.mutation({
            query: (tourTypeId) => ({
                url: `/users/block/${tourTypeId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["USER"]
        }),
    })
});


export const { useAllUserQuery, useUserBlockUnblockMutation } = userApi;