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
      // invalidatesTags: ["user"],
    }),
  }),
});

export const { useOrderMutation } = orderApi;
