import { END_POINTS } from "./domain";
import { BaseApi } from "./api";

export const whoAmi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWhoAmI: builder.query({
      query: () => ({
        url: `${END_POINTS.whoami}?email=${localStorage.getItem("email")}`,
        method: "GET",
      }),
      transformResponse: (res, meta, args) => {
        return res;
      },
    }),

    refreshToken: builder.query({
      query: () => ({
        url: `${END_POINTS.whoami}`,
        method: "GET",
        headers: {
          authorization: localStorage.getItem("refresh"),
        },
      }),
      transformResponse: (res, meta, args) => {
        return res;
      },
    }),
  }),
});

export const { useGetWhoAmIQuery, useLazyRefreshTokenQuery } = whoAmi;
export const userInfo = whoAmi.endpoints.getWhoAmI.select();
