import { QUERY_KEYS } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@/features/user/api/userData";

// TODO: add type UserQuery
export function useUserQuery(enabled?: boolean) {
  const {
    data: user,
    isError,
    isPending,
  } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: ({ signal }) => getUserData(signal),
    retry: false,
    enabled,
  });

  return { user, isError, isPending };
}
