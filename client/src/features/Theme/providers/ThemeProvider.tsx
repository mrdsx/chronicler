import { useTheme, type ThemeState } from "@/features/theme/hooks/useTheme";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
