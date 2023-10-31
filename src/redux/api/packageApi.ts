//import { tagTypes } from "../tag-types";
import { IMeta, ITrips } from "@/types";
import { baseApi } from "./baseApi";
// /auth/login
export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPackages: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/trips",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: ITrips, meta: IMeta) => {
        return {
          packages: response,
          meta,
        };
      },
    }),
  }),
});

export const { useGetPackagesQuery } = packageApi;
