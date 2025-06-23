import { useState, useEffect, createContext, useContext, useRef } from "react";

export interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesContextInt {
  notes: Note[];
  setNotes(arg0: Note[]): void;
  selectedNote: Note | null;
  setSelectedNote(note: Note | null): void;
  noteTitleInputRef: React.RefObject<HTMLInputElement | null> | null;
}

const initialValue: NotesContextInt = {
  notes: [],
  setNotes(): void {},
  selectedNote: null,
  setSelectedNote(): void {},
  noteTitleInputRef: null,
};

const NotesContext = createContext<NotesContextInt>(initialValue);

export function NotesProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const localStorageNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  const [notes, setNotes] = useState<Note[]>(localStorageNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const noteTitleInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        selectedNote,
        setSelectedNote,
        noteTitleInputRef,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotesContext(): NotesContextInt {
  return useContext(NotesContext);
}
