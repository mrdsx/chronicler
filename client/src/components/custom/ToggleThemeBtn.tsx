import { useEffect, useState } from "react";
import { Button } from "../ui";
import { Moon, Sun } from "lucide-react";

export function ToggleThemeBtn() {
  const localStorageIsDark = JSON.parse(
    localStorage.getItem("isDarkMode") || "false",
  );

  const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorageIsDark);
  if (isDarkMode) document.body.classList.add("dark");

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function handleClick(): void {
    document.body.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Button
      variant="outline"
      className="obr border-(--border-color)"
      onClick={handleClick}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
}
