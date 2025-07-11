import type { ErrorResponse } from "./types";

export function isErrorResponse(data: any): data is ErrorResponse {
  return data && typeof data.detail === "string";
}
