export const BACKEND_API_BASE_URL = "http://127.0.0.1:3000/api";

export const ENDPOINTS = {
  AUTH: {
    login: "/auth/login",
    register: "/auth/register",
  },
} as const;
