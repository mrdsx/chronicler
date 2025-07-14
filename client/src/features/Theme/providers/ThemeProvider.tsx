import { useTheme, type ThemeState } from "@/features/Theme/hooks/useTheme";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
