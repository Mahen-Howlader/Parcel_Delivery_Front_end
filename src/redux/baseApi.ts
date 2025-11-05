import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './axiosBaseQuery';

// fetchBaseQuery
// export const baseApi = createApi({
//     reducerPath: "baseApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1", credentials : "include" }),
//     endpoints: () => ({})
// })

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    endpoints: () => ({})
});