import { isErrorResponse } from "./utils";

const API_BASE_URL = "http://127.0.0.1:3000/api";

export async function apiClient(
  path: string,
  options?: RequestInit,
  errorMsg?: string,
) {
  const res = await fetch(`${API_BASE_URL}${path}`, options);
  const data = await res.json();

  if (isErrorResponse(data)) throw new Error(data.detail);

  if (!res.ok) throw new Error(errorMsg || "Unexpected error");

  return data;
}
