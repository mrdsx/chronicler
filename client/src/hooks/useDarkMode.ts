import { useState, useEffect } from "react";

export interface ThemeState {
  isDarkMode: boolean;
  setIsDarkMode(isEnabled: boolean): void;
}

export function useTheme(): ThemeState {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("isDarkMode") || "false");
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
}
