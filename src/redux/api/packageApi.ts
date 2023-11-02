//import { tagTypes } from "../tag-types";
import { IMeta, ITrips } from "@/types";
import { baseApi } from "./baseApi";
// /auth/login
export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPackages: build.mutation({
      query: (data) => ({
        url: "/trip",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["addPackage"],
    }),
    // userLogin: build.mutation({
    //   query: (loginData) => ({
    //     url: `${AUTH_URL}/login`,
    //     method: "POST",
    //     data: loginData,
    //   }),
    //   invalidatesTags: ["user"],
    // }),
    getPackages: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/trips",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          packages: response,
          meta,
        };
      },
    }),
  }),
});

export const { useGetPackagesQuery, useAddPackagesMutation } = packageApi;
