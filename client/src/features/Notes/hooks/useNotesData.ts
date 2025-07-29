import { apiClient, ENDPOINTS, getBearerAuthRequestOptions } from "@/api";
import { getUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import type { APINote, NotesData } from "../types";

// TODO: add type NotesData
export function useNotesData(): NotesData {
  async function getNotesData(signal: AbortSignal): Promise<APINote[] | null> {
    try {
      const accessToken = getUserAccessToken();
      if (accessToken === null) return null;

      const requestOptions = getBearerAuthRequestOptions(
        accessToken,
        "GET",
        signal,
      );
      return await apiClient<APINote[]>(
        ENDPOINTS.notes.root,
        requestOptions,
        "Failed to fetch notes",
      );
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        console.warn("Request was aborted");
        return null;
      }

      console.error(error);
      throw error;
    }
  }

  return { getNotesData };
}
