import {
  apiClient,
  APIError,
  ENDPOINTS,
  getBearerAuthRequestOptions,
  TOKEN_ERRORS,
} from "@/api";
import type { User, UserData } from "../types";
import {
  deleteUserAccessToken,
  getUserAccessToken,
} from "../utils/userAccessTokenUtils";

export function useUserData(): UserData {
  async function getUserData(): Promise<User | null> {
    try {
      const accessToken = getUserAccessToken();
      if (accessToken === null) return null;

      const requestOptions = getBearerAuthRequestOptions(accessToken, "GET");
      return await apiClient<User>(
        ENDPOINTS.users.me,
        requestOptions,
        "Failed to fetch user",
      );
    } catch (error) {
      if (error instanceof APIError && TOKEN_ERRORS.includes(error.code)) {
        deleteUserAccessToken();
      }
      console.error(error);
      throw error;
    }
  }

  return { getUserData };
}
