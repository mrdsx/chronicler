import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../api";

export function useGetNotesQuery() {
  const {
    data: notesData,
    isError,
    isPending,
  } = useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: ({ signal }) => getNotes(signal),
    retry: false,
  });

  return { notesData, isError, isPending };
}
