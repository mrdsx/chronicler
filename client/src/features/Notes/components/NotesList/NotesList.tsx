import { NoteItem } from "../NoteItem/NoteItem";
import { useEffect } from "react";
import { toast } from "sonner";
import { NotesListSkeletonLoader } from "./NotesListSkeletonLoader";
import { getNotes, type NotesResponse } from "../../api";
import {
  useNotesContext,
  useNotesQuery,
  useSearchNotesContext,
} from "@/features/notes/hooks";

export function NotesList() {
  const { notes, setNotes } = useNotesContext();
  const { searchQuery } = useSearchNotesContext();

  const { notesData, isError, isPending } = useNotesQuery<NotesResponse>({
    queryFn: getNotes,
  });

  useEffect(() => {
    if (notesData !== null && notesData !== undefined) {
      setNotes(notesData);
    }
  }, [notesData]);

  if (isError) toast.error("Failed to fetch notes");

  return (
    <div className="w-[30%] border-r-1 border-r-(--border-color)">
      <h2 className="pt-3 pb-2 pl-4 text-xl">Notes</h2>
      {isPending ? (
        <NotesListSkeletonLoader />
      ) : (
        notes.map((note) => {
          return (
            note.title.toLowerCase().includes(searchQuery) && (
              <NoteItem key={note.id} note={note} />
            )
          );
        })
      )}
    </div>
  );
}
