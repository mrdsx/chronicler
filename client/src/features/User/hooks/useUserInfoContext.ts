import { useContext } from "react";
import { UserInfoContext } from "../providers/UserInfoContext";

export function useUserInfoContext() {
  const context = useContext(UserInfoContext);
  if (context === null) {
    throw new Error("useUserContext must be used inside UserContextProvider");
  }

  return context;
}
