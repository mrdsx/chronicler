import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useUserQuery(queryFn: Function, enabled?: boolean) {
  const {
    data: user,
    isError,
    isPending,
  } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: ({ signal }) => queryFn(signal),
    retry: false,
    enabled,
  });

  return { user, isError, isPending };
}
