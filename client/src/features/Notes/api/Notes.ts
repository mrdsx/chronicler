import { apiClient, ENDPOINTS, getRequestOptions } from "@/api";
import { getUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import type { APINote, CreateNoteInput, NotesResponse } from "./types";

export async function createNote(
  note: CreateNoteInput,
): Promise<APINote | null> {
  try {
    const accessToken = getUserAccessToken();
    if (accessToken === null) throw new Error("Access token is not provided");

    const requestOptions = getRequestOptions({
      data: note,
      method: "POST",
      token: accessToken,
    });
    return await apiClient<APINote>(
      ENDPOINTS.notes.root,
      requestOptions,
      "Failed to create note",
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getNotes(
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
