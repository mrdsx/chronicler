export interface APINote {
  id: number;
  user_id: number;
  title: string;
  content: string;
}

export type NotesResponse = APINote[];
