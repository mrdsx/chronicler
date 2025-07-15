import { apiClient } from "@/api";
import type { User } from "./types";

export function useUserInfo() {
  async function getUserInfo() {
    try {
      const accessToken = localStorage.getItem("access_token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      return await apiClient<User>("/users", options, "Failed to fetch user");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
      throw error;
    }
  }

  return { getUserInfo };
}
