import { useState, createContext } from "react";
import type { Note, NotesContextType } from "../types";

export const NotesContext = createContext<NotesContextType | null>(null);

export function NotesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notes, setNotes] = useState<Note[]>([]);

  const contextValue = {
    notes,
    setNotes,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
}
