import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";

interface UserQueryProps {
  queryFn: Function;
  enabled?: boolean;
}

export function useUserQuery({ queryFn, enabled }: UserQueryProps) {
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
