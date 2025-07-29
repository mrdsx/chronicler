import { NotesArea, NotesList, Sidebar } from "@/features/notes/components";
import { NoteEditor } from "@/features/notes/components/NoteEditor/NoteEditor";
import { NotesProvider } from "@/features/notes/providers/NotesProvider";

export function Notes() {
  return (
    <NotesProvider>
      <div className="box-border flex h-[100vh] gap-2 bg-(--background) p-2">
        <Sidebar />
        <NotesArea>
          <NotesList />
          <NoteEditor />
        </NotesArea>
      </div>
    </NotesProvider>
  );
}
