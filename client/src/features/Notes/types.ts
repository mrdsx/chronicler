import type { APINote } from "./api";

export interface EditNoteActions {
  editNoteContent(targetNote: APINote, newNoteContent: string): void;
  handleEditNoteTitle(title: string, setTitle: Function): void;
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
