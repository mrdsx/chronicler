import { NoteItem } from "../NoteItem/NoteItem";
import { useNotesContext, useSearchNotesContext } from "../../hooks/context";
import { useQuery } from "@tanstack/react-query";
import { useNotesData } from "../../hooks/useNotesData";
import { useEffect } from "react";
import { toast } from "sonner";
import { NotesListSkeletonLoader } from "./NotesListSkeletonLoader";
import { QUERY_KEYS } from "@/api";

export function NotesList() {
  const { notes, setNotes } = useNotesContext();
  const { searchQuery } = useSearchNotesContext();
  const { getNotesData } = useNotesData();

  const {
    data: notesData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: ({ signal }) => getNotesData(signal),
    retry: false,
  });

  // TODO: remove any
  useEffect(() => {
    if (notesData !== null && notesData !== undefined) {
      setNotes(notesData as any);
    }
  }, [notesData]);

  if (isError) toast.error("Failed to fetch notes");

  return (
    <div className="w-[30%] border-r-1 border-r-(--border-color)">
      <h2 className="pt-3 pb-2 pl-4 text-xl">Notes</h2>
      {isLoading ? (
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
