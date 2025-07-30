import type { ErrorResponse, RestAPIMethod } from "./types";

export function getBearerAuthRequestOptions(
  token: string,
  method?: string,
  signal?: AbortSignal,
  data?: string,
): RequestInit {
  return {
    signal,
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
}

export function getRequestOptions({
  data,
  method = "GET",
  token,
  signal,
}: {
  data?: any;
  method?: RestAPIMethod;
  token?: string;
  signal?: AbortSignal;
}): RequestInit {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(data),
    signal,
  };
}

export function isErrorResponse(data: any): data is ErrorResponse {
  return data && typeof data.detail === "string";
}
