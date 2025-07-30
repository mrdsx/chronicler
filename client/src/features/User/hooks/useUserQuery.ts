import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";
import type { UserQueryProps } from "../types";

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
