import { apiClient, ENDPOINTS } from "@/api";
import type { User } from "../types";

export function useUserData() {
  async function getUserData() {
    try {
      const accessToken = localStorage.getItem("access_token");
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
