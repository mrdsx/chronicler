import {
  NoteEditorRefsContextProvider,
  NotesContextProvider,
  SearchNotesContextProvider,
  SelectedNoteContextProvider,
} from "../features/Notes/providers";

export function NotesProviders({ children }: { children: React.ReactNode }) {
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
