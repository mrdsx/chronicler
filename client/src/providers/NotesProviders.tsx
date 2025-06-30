import { NoteEditorRefsContextProvider } from "@/features/Notes/providers/NoteEditorRefsContextProvider";
import { NotesContextProvider } from "@/features/Notes/providers/NotesContextProvider";
import { SearchNotesContextProvider } from "@/features/Notes/providers/SearchNotesContextProvider";
import { SelectedNoteContextProvider } from "@/features/Notes/providers/SelectedNoteContextProvider";

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
