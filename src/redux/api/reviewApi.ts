import { baseApi } from "./baseApi";
// /auth/login
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation({
      query: (payload) => ({
        url: "api/v1/review",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["review"],
    }),
    getReviewId: build.query({
      query: (id) => ({
        url: `api/v1/review/${id}`,
        method: "GET",
      }),
      // invalidatesTags: ["user"],
    }),
    getReview: build.query({
      query: (id) => ({
        url: `api/v1/review/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
      // transformResponse: (response: ITrips) => {
      //   return {
      //     package: response,
      //   };
      // },
    }),
  }),
});

export const { useAddReviewMutation, useGetReviewQuery } = reviewApi;
