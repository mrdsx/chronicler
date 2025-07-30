import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";
import type { NotesQueryProps } from "../types";

export function useNotesQuery<TResponse>({
  queryFn,
  enabled,
}: NotesQueryProps) {
  const {
    data: notesData,
    isError,
    isPending,
  } = useQuery<TResponse>({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: ({ signal }) => queryFn(signal),
    retry: false,
    enabled,
  });

  return { notesData, isError, isPending };
}
