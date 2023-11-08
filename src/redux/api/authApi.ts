//import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "auth";
// /auth/login
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `api/v1/${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
