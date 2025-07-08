import { createContext, useRef, type PropsWithChildren } from "react";
import type { NoteEditorRefsContextType } from "../types";

export const NoteEditorRefsContext =
  createContext<NoteEditorRefsContextType | null>(null);

export function NoteEditorRefsContextProvider({
  children,
}: PropsWithChildren) {
  const noteTitleInputRef = useRef<HTMLInputElement>(null);

  return (
    <NoteEditorRefsContext.Provider value={{ noteTitleInputRef }}>
      {children}
    </NoteEditorRefsContext.Provider>
  );
}
