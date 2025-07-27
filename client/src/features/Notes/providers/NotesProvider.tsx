import {
  NoteEditorRefsContextProvider,
  NotesContextProvider,
  SearchNotesContextProvider,
  SelectedNoteContextProvider,
} from ".";

export function NotesProvider({ children }: { children: React.ReactNode }) {
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
