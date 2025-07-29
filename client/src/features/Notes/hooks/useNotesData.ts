import { apiClient, ENDPOINTS, getBearerAuthRequestOptions } from "@/api";
import { getUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import type { APINote } from "../types";

// TODO: add type NotesData
export function useNotesData() {
  async function fetchNotes(signal: AbortSignal) {
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

  return { fetchNotes };
}
