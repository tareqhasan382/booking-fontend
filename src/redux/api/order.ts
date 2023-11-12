//import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const ORDER_URL = "order";
// /auth/login
export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    order: build.mutation({
      query: (payload) => ({
        url: `api/v1/${ORDER_URL}`,
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["order"],
    }),
    orders: build.query({
      query: (id) => ({
        url: `api/v1/orders/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    deleteOrder: build.mutation({
      query: (id: string) => ({
        url: `api/v1/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useOrderMutation, useOrdersQuery, useDeleteOrderMutation } =
  orderApi;
