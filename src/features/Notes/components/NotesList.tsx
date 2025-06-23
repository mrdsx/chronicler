import { useNotesContext } from "@/providers/NotesProvider";
import { NoteItem } from "./NoteItem/NoteItem";

export function NotesList(): React.ReactElement {
  const { notes } = useNotesContext();

  return (
    <div className="w-[30%] border-r-1 border-r-(--border-color)">
      <h2 className="p-2 pl-4 text-xl">Notes</h2>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
