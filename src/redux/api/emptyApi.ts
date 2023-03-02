import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const emptyApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no-country-personaltrainer-crossfit.onrender.com/api/",

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      console.log(token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});