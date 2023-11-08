import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const API_NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_PLAYMATES_ENDPOINT;

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_NEXT_PUBLIC_BASE_URL}/api/users`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  reducerPath: "userApi",
  tagTypes: [],
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body: any) => ({
        url: `/sign-up-email`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  util: { getRunningQueriesThunk, getRunningMutationsThunk },
} = userApi;
export const { signUp } = userApi.endpoints;
