import type { APINote } from "./api";

export interface EditNoteActions {
  editNoteTitle(targetNote: APINote, newNoteTitle: string): void;
  editNoteContent(targetNote: APINote, newNoteContent: string): void;
}

export interface NotesActions {
  selectNoteTitleInput(): void;
  createNote(title: string, content?: string): APINote;
  deleteNote(targetId: APINote["id"]): void;
}

export interface NotesQueryProps {
  queryFn: Function;
  enabled?: boolean;
}

export type NoteEditorRefsContextType = {
  noteTitleInputRef: React.RefObject<HTMLInputElement | null>;
};

export type NotesContextType = {
  notes: APINote[];
  setNotes(arg0: APINote[]): void;
};

export type SelectedNoteContextType = {
  selectedNote: APINote | null;
  setSelectedNote(note: APINote | null): void;
};

export type SearchNotesContextType = {
  searchQuery: string;
  setSearchQuery(query: string): void;
};
