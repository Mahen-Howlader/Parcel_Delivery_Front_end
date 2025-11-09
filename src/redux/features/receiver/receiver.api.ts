import { baseApi } from "@/redux/baseApi";

export const receiverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        receiverAllData: builder.query({
            query: () => ({
                url: "/parcels/incoming",
                method: "GET",
            }),
            providesTags: ["PARCEL"]
        }),
        deliveryCompleted: builder.mutation({
            query: (userId) => ({
                url: `/parcels/receive/${userId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["PARCEL"]
        }),
        deliveryHistory: builder.query({
            query: () => ({
                url: `/parcels/history`,
                method: "GET",
            }),
            providesTags: ["PARCEL"]
        }),
    })
})


export const { useReceiverAllDataQuery , useDeliveryCompletedMutation, useDeliveryHistoryQuery} = receiverApi;