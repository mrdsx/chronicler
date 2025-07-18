import { API_BASE_URL } from "./constants";
import type { Path } from "./types";
import { isErrorResponse } from "./utils";

export async function apiClient<TResponse extends Record<string, any>>(
  path: Path,
  options?: RequestInit,
  errorMsg?: string,
): Promise<TResponse> {
  const res = await fetch(`${API_BASE_URL}${path}`, options);
  const data = await res.json();

  if (isErrorResponse(data)) throw new Error(data.detail);

  if (!res.ok)
    throw new Error(errorMsg || "An error occurred while fetching data");

  return data;
}
