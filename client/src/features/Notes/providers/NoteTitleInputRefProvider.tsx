import { createContext, useRef } from "react";
import type { NoteTitleInputRefContextType } from "../types";

export const NoteTitleInputRefContext =
  createContext<NoteTitleInputRefContextType | null>(null);

export function NoteTitleInputRefContextProvider({
  children,
}: React.PropsWithChildren) {
  const noteTitleInputRef = useRef<HTMLInputElement>(null);

  return (
    <NoteTitleInputRefContext.Provider value={noteTitleInputRef}>
      {children}
    </NoteTitleInputRefContext.Provider>
  );
}
