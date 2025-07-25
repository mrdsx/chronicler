interface EditNoteActions {
  editNoteTitle(targetNote: Note, newNoteTitle: string): void;
  editNoteContent(targetNote: Note, newNoteContent: string): void;
}

interface Note {
  id: string;
  title: string;
  content: string;
}

type NotesActions = {
  selectNoteTitleInput(): void;
  createNote(title: string, content?: string): Note;
  deleteNote(targetId: string): void;
};

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
  EditNoteActions,
  Note,
  NotesActions,
  NoteEditorRefsContextType,
  NotesContextType,
  SelectedNoteContextType,
  SearchNotesContextType,
};
