import { END_POINTS } from "./domain";
import { BaseApi } from "./api";

export const whoAmi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWhoAmI: builder.query({
      query: () => `${END_POINTS.whoami}`,
      transformResponse: (res, meta, args) => {
        return res;
      },
    }),
  }),
});

export const { useGetWhoAmIQuery } = whoAmi;
