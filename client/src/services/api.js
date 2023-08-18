import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({}),
});
