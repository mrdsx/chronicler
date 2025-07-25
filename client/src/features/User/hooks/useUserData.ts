import { apiClient, ENDPOINTS } from "@/api";
import type { User, UserData } from "../types";
import {
  deleteUserAccessToken,
  getUserAccessToken,
} from "../utils/userAccessTokenUtils";
import { APIError } from "@/api/types";

export function useUserData(): UserData {
  async function getUserData(): Promise<User | null> {
    try {
      const accessToken = getUserAccessToken();
      if (accessToken === null) return null;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      return await apiClient<User>(
        ENDPOINTS.users.me,
        options,
        "Failed to fetch user",
      );
    } catch (error) {
      if (error instanceof APIError && error.code === "token_expired") {
        deleteUserAccessToken();
      }
      console.error(error);
      throw error;
    }
  }

  return { getUserData };
}
