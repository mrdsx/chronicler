import { useTheme, type ThemeState } from "@/hooks/useDarkMode";
import { createContext, useContext } from "react";

const ThemeContext = createContext<ThemeState | null>(null);

export function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useThemeContext must be used inside ThemeContextProvider");
  }

  return context;
}
