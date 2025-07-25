import type { ErrorResponse } from "./types";

export function getBearerAuthRequestOptions(
  token: string,
  method?: string,
  data?: string,
): RequestInit {
  return {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
}

export function getRequestOptions(data: any, method?: string): RequestInit {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}

export function isErrorResponse(data: any): data is ErrorResponse {
  return data && typeof data.detail === "string";
}
