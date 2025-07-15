import { apiClient } from "@/api";
import { toast } from "sonner";

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

      return await apiClient("/users", options, "Failed to fetch user");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return { getUserInfo };
}
