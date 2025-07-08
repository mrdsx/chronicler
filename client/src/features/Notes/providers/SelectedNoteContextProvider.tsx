import { createContext, useState, type PropsWithChildren } from "react";
import type { Note, SelectedNoteContextType } from "../types";

export const SelectedNoteContext =
  createContext<SelectedNoteContextType | null>(null);

export function SelectedNoteContextProvider({ children }: PropsWithChildren) {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </SelectedNoteContext.Provider>
  );
}
