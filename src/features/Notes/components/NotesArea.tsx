import { NotesList } from "./NotesList";
import { NoteEditor } from "./NoteEditor/NoteEditor";

export function NotesArea() {
  return (
    <div className="flex w-full rounded-md border-1 border-(--border-color)">
      <NotesList />
      <NoteEditor />
    </div>
  );
}
