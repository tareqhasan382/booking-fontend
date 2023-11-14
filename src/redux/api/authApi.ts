//import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "auth";
// /auth/login
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
      query: (payload) => ({
        url: `api/v1/${AUTH_URL}/signup`,
        method: "POST",
        data: payload,
      }),
      //invalidatesTags: ["auth"],
    }),
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

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;
//http://localhost:5000/api/v1/auth/signup
