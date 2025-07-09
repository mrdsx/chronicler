import { useState, useEffect } from "react";

interface DarkModeState {
  enabled: boolean;
  setDarkMode(isEnabled: boolean): void;
}

export function useDarkMode(): DarkModeState {
  const [enabled, setDarkMode] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("isDarkMode") || "false");
  });

  useEffect(() => {
    document.body.classList.toggle("dark", enabled);
    localStorage.setItem("isDarkMode", JSON.stringify(enabled));
  }, [enabled]);

  return { enabled, setDarkMode };
}
