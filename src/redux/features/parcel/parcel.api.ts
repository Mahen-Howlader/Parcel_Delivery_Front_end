import { baseApi } from "@/redux/baseApi";
import type { IParcelFrontend, ParcelStatus } from "@/types/parcel.type";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allParcel: builder.query({
            query: () => ({
                url: "/parcels",
                method: "GET",
            }),
            providesTags: ["PARCEL"]
        }),
        parcelsMe: builder.query({
            query: () => ({
                url: "/parcels/me",
                method: "GET",
            }),
            providesTags: ["PARCEL"]
        }),
        parcelBlockUnblock: builder.mutation({
            query: (parcelId) => ({
                url: `/parcels/block/${parcelId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["PARCEL"]
        }),
        parcelCancelled: builder.mutation({
            query: (parcelId) => ({
                url: `/parcels/cancel/${parcelId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["PARCEL"]
        }),
        parcelStatusUpdate: builder.mutation<IParcelFrontend, { parcelId: string; status: ParcelStatus }>({
            query: ({ parcelId, status }) => ({
                url: `/parcels/${parcelId}?status=${status}`,
                method: "PATCH",
            }),
            invalidatesTags: ["PARCEL"],
        }),
    })
});


export const { useAllParcelQuery, useParcelBlockUnblockMutation, useParcelStatusUpdateMutation, useParcelsMeQuery , useParcelCancelledMutation} = userApi;