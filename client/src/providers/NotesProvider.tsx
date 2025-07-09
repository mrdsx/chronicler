import {
  NoteEditorRefsContextProvider,
  NotesContextProvider,
  SearchNotesContextProvider,
  SelectedNoteContextProvider,
} from "../features/Notes/providers";

export function NotesProvider({ children }: React.PropsWithChildren) {
  return (
    <NoteEditorRefsContextProvider>
      <SearchNotesContextProvider>
        <SelectedNoteContextProvider>
          <NotesContextProvider>{children}</NotesContextProvider>
        </SelectedNoteContextProvider>
      </SearchNotesContextProvider>
    </NoteEditorRefsContextProvider>
  );
}
