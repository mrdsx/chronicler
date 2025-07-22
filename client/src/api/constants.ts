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
} satisfies Endpoints;
