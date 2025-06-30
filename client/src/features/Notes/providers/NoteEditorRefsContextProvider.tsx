import { createContext, useContext, useRef } from "react";

type NoteEditorRefsContextType = {
  noteTitleInputRef: React.RefObject<HTMLInputElement | null>;
};

const NoteEditorRefsContext = createContext<NoteEditorRefsContextType>(
  {} as NoteEditorRefsContextType,
);

export function NoteEditorRefsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const noteTitleInputRef = useRef<HTMLInputElement>(null);

  return (
    <NoteEditorRefsContext.Provider value={{ noteTitleInputRef }}>
      {children}
    </NoteEditorRefsContext.Provider>
  );
}

export function useNoteEditorRefsContext() {
  return useContext(NoteEditorRefsContext);
}
