export interface Note {
  id: string;
  title: string;
  content: string;
}

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
