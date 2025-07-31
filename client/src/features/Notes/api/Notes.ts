import {
  apiClient,
  ENDPOINTS,
  getRequestOptions,
  type BaseAPIResponse,
} from "@/api";
import { getUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import type {
  APINote,
  CreateNoteInput,
  EditNoteProps,
  NotesResponse,
} from "./types";

// TODO: add abort controller
export async function createNote(note: CreateNoteInput): Promise<APINote> {
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

// TODO: add abort controller
export async function deleteNote(noteId: number): Promise<BaseAPIResponse> {
  try {
    const accessToken = getUserAccessToken();
    if (accessToken === null) throw new Error("Access token is not provided");

    const requestOptions = getRequestOptions({
      method: "DELETE",
      token: accessToken,
    });
    return await apiClient<BaseAPIResponse>(
      `${ENDPOINTS.notes.root}/${noteId}`,
      requestOptions,
      "Failed to delete note",
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// TODO: add abort controller
export async function editNote({
  noteId,
  note,
}: EditNoteProps): Promise<APINote> {
  try {
    const accessToken = getUserAccessToken();
    if (accessToken === null) throw new Error("Access token is not provided");

    const requestOptions = getRequestOptions({
      data: note,
      method: "PATCH",
      token: accessToken,
    });
    return await apiClient<APINote>(
      `${ENDPOINTS.notes.root}/${noteId}`,
      requestOptions,
      "Failed to edit note",
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
