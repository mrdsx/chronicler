import { useContext } from "react";
import { UserInfoContext } from "../providers/UserInfoContext";

export function useUserInfoContext() {
  const context = useContext(UserInfoContext);
  if (context === null) {
    throw new Error(
      "useUserInfoContext must be used inside UserInfoContextProvider",
    );
  }

  return context;
}
