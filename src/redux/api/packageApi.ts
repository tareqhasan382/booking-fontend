//import { tagTypes } from "../tag-types";
import { IMeta, ITrips } from "@/types";
import { baseApi } from "./baseApi";
// /auth/login
export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPackages: build.mutation({
      query: (data) => ({
        url: "trip",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["addPackage"],
    }),

    getPackages: build.query({
      query: (arg: Record<string, any>) => ({
        url: "api/v1/trips",
        method: "GET",
        params: arg,
      }),
      // transformResponse: (response: any, meta: IMeta) => {
      //   return {
      //     packages: response,
      //     meta,
      //   };
      // },
    }),
    getSinglePackage: build.query({
      query: (id) => ({
        url: `api/v1/trips/${id}`,
        method: "GET",
      }),
      // transformResponse: (response: ITrips) => {
      //   return {
      //     package: response,
      //   };
      // },
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useAddPackagesMutation,
  useGetSinglePackageQuery,
} = packageApi;
