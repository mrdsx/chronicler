import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";

interface NotesQueryProps {
  queryFn: Function;
  enabled?: boolean;
}

export function useNotesQuery({ queryFn, enabled }: NotesQueryProps) {
  const {
    data: notesData,
    isError,
    isPending,
  } = useQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: ({ signal }) => queryFn(signal),
    retry: false,
    enabled,
  });

  return { notesData, isError, isPending };
}
