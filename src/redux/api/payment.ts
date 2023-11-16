//import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const PAYMENT_URL = "payment";
// /auth/login
export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    paymentRequest: build.mutation({
      query: (payload) => ({
        url: "api/v1/payment/init",
        method: "POST",
        data: payload,
      }),
      // invalidatesTags: ["payment"],
    }),
    allPayment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "api/v1/payment",
        method: "GET",
        params: arg,
      }),
    }),
    getPayment: build.query({
      query: (id) => ({
        url: `api/v1/payment/${id}`, // /payment/:id
        method: "GET",
      }),
      // providesTags: ["payment"],
    }),
    // deleteOrder: build.mutation({
    //   query: (id: string) => ({
    //     url: `api/v1/payment/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["payment"],
    // }),
  }),
});

export const {
  usePaymentRequestMutation,
  useAllPaymentQuery,
  useGetPaymentQuery,
} = paymentApi;
