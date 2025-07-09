import {
  NoteEditorRefsContextProvider,
  NotesContextProvider,
  SearchNotesContextProvider,
  SelectedNoteContextProvider,
} from ".";

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
