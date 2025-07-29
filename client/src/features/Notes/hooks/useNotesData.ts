import { apiClient, ENDPOINTS, getBearerAuthRequestOptions } from "@/api";
import { getUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import type { APINote } from "../types";

export function useNotesData() {
  async function fetchNotes() {
    try {
      const accessToken = getUserAccessToken();
      if (accessToken === null) return null;

      const requestOptions = getBearerAuthRequestOptions(accessToken, "GET");
      return await apiClient<APINote[]>(
        ENDPOINTS.notes.root,
        requestOptions,
        "Failed to fetch notes",
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { fetchNotes };
}
