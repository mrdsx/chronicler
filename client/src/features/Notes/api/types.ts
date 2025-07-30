export interface APINote {
  id: number;
  user_id: number;
  title: string;
  content: string;
}

export type CreateNoteInput = Pick<APINote, "title" | "content">;

export type NotesResponse = APINote[];
