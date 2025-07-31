import { useRef } from "react";

export function useNoteTitleInputRef(): React.RefObject<HTMLInputElement | null> {
  return useRef<HTMLInputElement>(null);
}
