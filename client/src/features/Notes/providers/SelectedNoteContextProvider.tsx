import { createContext, useState } from "react";
import type { SelectedNoteContextType } from "../types";
import type { APINote } from "../api";

export const SelectedNoteContext =
  createContext<SelectedNoteContextType | null>(null);

export function SelectedNoteContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedNote, setSelectedNote] = useState<APINote | null>(null);

  return (
    <SelectedNoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </SelectedNoteContext.Provider>
  );
}
