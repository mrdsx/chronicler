import {
  apiClient,
  APIError,
  ENDPOINTS,
  getRequestOptions,
  TOKEN_ERRORS,
} from "@/api";
import {
  deleteUserAccessToken,
  getUserAccessToken,
} from "../utils/userAccessTokenUtils";
import type { UserResponse } from "./types";

export async function getUser(
  signal: AbortSignal,
): Promise<UserResponse | null> {
  try {
    const accessToken = getUserAccessToken();
    if (accessToken === null) return null;

    const requestOptions = getRequestOptions({ token: accessToken, signal });
    return await apiClient<UserResponse>(
      ENDPOINTS.users.me,
      requestOptions,
      "Failed to fetch user",
    );
  } catch (error) {
    if (error instanceof APIError && TOKEN_ERRORS.includes(error.code)) {
      deleteUserAccessToken();
    }
    if (error instanceof DOMException && error.name === "AbortError") {
      console.warn("Request was aborted");
      return null;
    }

    console.error(error);
    throw error;
  }
}
