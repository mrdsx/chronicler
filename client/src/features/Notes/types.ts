export interface EditNoteActions {
  editNoteTitle(targetNote: Note, newNoteTitle: string): void;
  editNoteContent(targetNote: Note, newNoteContent: string): void;
}

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface NotesActions {
  selectNoteTitleInput(): void;
  createNote(title: string, content?: string): Note;
  deleteNote(targetId: string): void;
}

export interface NotesQueryProps {
  queryFn: Function;
  enabled?: boolean;
}

export type NoteEditorRefsContextType = {
  noteTitleInputRef: React.RefObject<HTMLInputElement | null>;
};

export type NotesContextType = {
  notes: Note[];
  setNotes(arg0: Note[]): void;
};

export type SelectedNoteContextType = {
  selectedNote: Note | null;
  setSelectedNote(note: Note | null): void;
};

export type SearchNotesContextType = {
  searchQuery: string;
  setSearchQuery(query: string): void;
};
