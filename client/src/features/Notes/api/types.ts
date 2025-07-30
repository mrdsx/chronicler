export interface APINote {
  id: number;
  user_id: number;
  title: string;
  content: string;
}

export type CreateNoteInput = Pick<APINote, "title" | "content">;

type EditNoteInput = Partial<Pick<APINote, "title" | "content">>;

export interface EditNoteProps {
  noteId: number;
  note: EditNoteInput;
}

export type NotesResponse = APINote[];
