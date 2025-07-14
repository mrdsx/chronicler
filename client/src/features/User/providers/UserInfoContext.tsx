import { createContext } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import type { UserInfoContextType } from "../types";

export const UserInfoContext = createContext<UserInfoContextType | null>(null);

export function UserInfoContextProvider({ children }: React.PropsWithChildren) {
  const user = useUserInfo();

  return (
    <UserInfoContext.Provider value={user}>{children}</UserInfoContext.Provider>
  );
}
