import { useState, createContext } from "react";
import type { NotesContextType } from "../types";
import type { APINote } from "../api";

export const NotesContext = createContext<NotesContextType | null>(null);

export function NotesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notes, setNotes] = useState<APINote[]>([]);

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
