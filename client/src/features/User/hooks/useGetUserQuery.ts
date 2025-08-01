import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { getUser, type UserResponse } from "../api";

export function useGetUserQuery({ enabled }: { enabled: boolean }) {
  const {
    data: user,
    isError,
    isPending,
  } = useQuery<unknown, Error, UserResponse>({
    queryKey: [QUERY_KEYS.USER],
    queryFn: ({ signal }) => getUser(signal),
    retry: false,
    enabled,
  });

  return { user, isError, isPending };
}
