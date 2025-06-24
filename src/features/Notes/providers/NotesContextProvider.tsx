import { useState, useEffect, createContext, useContext, useRef } from "react";
import type { Note, NotesContextType } from "../types";
import { LOCAL_STORAGE_KEYS } from "../constants";

const NotesContext = createContext<NotesContextType>({} as NotesContextType);

export function NotesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const localStorageNotes = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.notes) || "[]",
  );

  const [notes, setNotes] = useState<Note[]>(localStorageNotes);
  const noteTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.notes, JSON.stringify(notes));
  }, [notes]);

  const contextValue = {
    notes,
    setNotes,
    noteTitleInputRef,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotesContext(): NotesContextType {
  return useContext(NotesContext);
}
