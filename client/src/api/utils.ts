import type { ErrorResponse, RestAPIMethod } from "./types";

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
