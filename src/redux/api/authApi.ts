import { emptyApi } from "./emptyApi";

interface LoginResponse {
  msg: string;
  username: string;
  token: string;
}

interface Body {
  username?: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  msg: string;
  user: object;
}

interface BodyRegister {
  username: string;
  email: string;
  password: string;
}

const extendedAuthApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Body>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation<RegisterResponse, BodyRegister>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = extendedAuthApi;
