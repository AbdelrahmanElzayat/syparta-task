import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cyparta-backend-gf7qm.ondigitalocean.app/api",
    prepareHeaders: (headers, { getState }) => {
      const token = Cookies.get("token");
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3OTA4NzQ0LCJpYXQiOjE3MjUzMTY3NDQsImp0aSI6IjlkYmFmMGI2YzhiNDRhNzVhNWM5MzM2ODVmMzI2ZWViIiwidXNlcl9pZCI6MjJ9.vMHcwzy_aDy56jhYaiLVVcdg6WGNNNQtsIABa9tMUD0"; // تأكد إن عندك توكين في الـ state بتاعك

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/profile/",
    }),
    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: "/profile/",
        method: "PATCH",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  profileApi;
