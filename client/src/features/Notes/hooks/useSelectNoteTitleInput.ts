import { useNoteEditorRefsContext } from "./context";

export function useSelectNoteTitleInput(): () => void {
  const { noteTitleInputRef } = useNoteEditorRefsContext();

  return function (): void {
    noteTitleInputRef?.current?.select();
  };
}
