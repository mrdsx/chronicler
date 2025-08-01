import {
  NotesContextProvider,
  NoteTitleInputRefContextProvider,
  SearchNotesContextProvider,
  SelectedNoteContextProvider,
} from ".";

export function NotesProvider({ children }: { children: React.ReactNode }) {
  return (
    <SelectedNoteContextProvider>
      <SearchNotesContextProvider>
        <NoteTitleInputRefContextProvider>
          <NotesContextProvider>{children}</NotesContextProvider>
        </NoteTitleInputRefContextProvider>
      </SearchNotesContextProvider>
    </SelectedNoteContextProvider>
  );
}
