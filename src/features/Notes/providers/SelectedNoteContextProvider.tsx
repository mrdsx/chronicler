import { createContext, useContext, useState } from "react";
import type { Note, SelectedNoteContextType } from "../types";

const SelectedNoteContext = createContext<SelectedNoteContextType>(
  {} as SelectedNoteContextType,
);

export function SelectedNoteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </SelectedNoteContext.Provider>
  );
}

export function useSelectedNoteContext() {
  return useContext(SelectedNoteContext);
}
