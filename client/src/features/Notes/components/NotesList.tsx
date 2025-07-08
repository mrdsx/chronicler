import { NoteItem } from "./NoteItem/NoteItem";
import { useNotesContext, useSearchNotesContext } from "../hooks/context";

export function NotesList() {
  const { notes } = useNotesContext();
  const { searchQuery } = useSearchNotesContext();

  return (
    <div className="w-[30%] border-r-1 border-r-(--border-color)">
      <h2 className="p-2 pl-4 text-xl">Notes</h2>
      {notes.map((note) => {
        return (
          note.title.toLowerCase().includes(searchQuery) && (
            <NoteItem key={note.id} note={note} />
          )
        );
      })}
    </div>
  );
}
