import { baseApi } from "@/redux/baseApi";

export const deliveryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deliveryManInfo: builder.query({
            query: () => ({
                url: "/deliveryman",
                method: "GET",
            }),
            providesTags: ["DELIVERY"]
        }),
    })
})


export const { useDeliveryManInfoQuery } = deliveryApi;