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
    getSinglePackage: build.query({
      query: (slug: string) => ({
        url: `/api/v1/trips/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useAddPackagesMutation,
  useGetSinglePackageQuery,
} = packageApi;
