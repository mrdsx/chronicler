import { apiClient, ENDPOINTS, getRequestOptions } from "@/api";
import { getUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import type { NotesResponse } from "./types";

export async function getNotesData(
  signal: AbortSignal,
): Promise<NotesResponse | null> {
  try {
    const accessToken = getUserAccessToken();
    if (accessToken === null) return null;

    const requestOptions = getRequestOptions({ token: accessToken, signal });
    return await apiClient<NotesResponse>(
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
