interface Note {
  id: string;
  title: string;
  content: string;
}

type NoteEditorRefsContextType = {
  noteTitleInputRef: React.RefObject<HTMLInputElement | null>;
};

type NotesContextType = {
  notes: Note[];
  setNotes(arg0: Note[]): void;
};

type SelectedNoteContextType = {
  selectedNote: Note | null;
  setSelectedNote(note: Note | null): void;
};

type SearchNotesContextType = {
  searchQuery: string;
  setSearchQuery(query: string): void;
};

export type {
  Note,
  NoteEditorRefsContextType,
  NotesContextType,
  SelectedNoteContextType,
  SearchNotesContextType,
};
