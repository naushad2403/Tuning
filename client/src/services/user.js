import { END_POINTS } from "./domain";
import { BaseApi } from "./api";

export const users = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `${END_POINTS.users}`,
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }),
      transformResponse: (res, meta, args) => {
        return res;
      },
    }),
  }),
});

export const { useGetUsersQuery } = users;
