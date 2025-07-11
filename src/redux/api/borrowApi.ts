import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-backend-rho.vercel.app/api/",
  }),
  tagTypes: ["Borrow"],
  endpoints: (builder) => ({
    getBorrow: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),
    getAllBorrow: builder.query({
      query: () => "/borrow/all",
      providesTags: ["Borrow"],
    }),
    addBorrow: builder.mutation({
      query: (body) => ({
        url: "borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const { useGetBorrowQuery, useGetAllBorrowQuery, useAddBorrowMutation } =
  borrowApi;
