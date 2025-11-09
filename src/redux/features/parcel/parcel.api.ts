import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
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
        allReciverName: builder.query({
            query: () => ({
                url: "/parcels/recervers",
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
        createParcel: builder.mutation<IResponse<null>, IParcelFrontend>({
            query: (parcelInfo) => (
                {
                    url: `/parcels`,
                    method: "POST",
                    data: parcelInfo
                }
            ),
            invalidatesTags: ["PARCEL"],
        }),
        trakingParcel: builder.query({
            query: (trakingId) => (
                {
                    url: `/parcels/track/${trakingId}`,
                    method: "GET"
                }
            ),
            providesTags: ["PARCEL"],
        }),
    })
});


export const { useTrakingParcelQuery,useAllParcelQuery, useParcelBlockUnblockMutation, useParcelStatusUpdateMutation, useParcelsMeQuery, useParcelCancelledMutation, useCreateParcelMutation, useAllReciverNameQuery } = userApi;