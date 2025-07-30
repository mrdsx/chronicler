import type { Endpoints } from "./types";

export const API_BASE_URL = "http://127.0.0.1:3000/api";

export const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  users: {
    me: "/users/me",
  },
  notes: {
    root: "/notes",
  },
} satisfies Endpoints;

export const TOKEN_ERRORS = ["token_expired", "invalid_token"];

export enum QUERY_KEYS {
  LOGIN_ACCESS_TOKENS = "login_access_tokens",
  NOTES = "notes",
  SIGNUP_ACCESS_TOKENS = "signup_access_tokens",
  USER = "user",
}
