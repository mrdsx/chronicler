import {
  NotesContextProvider,
  SearchNotesContextProvider,
  SelectedNoteContextProvider,
} from ".";

export function NotesProvider({ children }: { children: React.ReactNode }) {
  return (
    <SearchNotesContextProvider>
      <SelectedNoteContextProvider>
        <NotesContextProvider>{children}</NotesContextProvider>
      </SelectedNoteContextProvider>
    </SearchNotesContextProvider>
  );
}
