import { ToggleThemeSwitch } from "@/features/theme/components/ToggleThemeSwitch";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="dark:border-b-border border-b-1 border-b-(--border-color) bg-(--home-background)">
      <div className="mx-auto flex items-center justify-between px-4 py-2.5">
        {children}
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-end space-x-2">
          <ToggleThemeSwitch />
        </div>
      </div>
    </header>
  );
}
