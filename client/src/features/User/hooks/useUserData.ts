import { apiClient, ENDPOINTS } from "@/api";
import type { User, UserData } from "../types";
import { getUserAccessToken } from "../utils/userAccessTokenUtils";

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
        ENDPOINTS.USERS.me,
        options,
        "Failed to fetch user",
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
      throw error;
    }
  }

  return { getUserData };
}
