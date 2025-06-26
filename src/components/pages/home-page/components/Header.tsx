import { SignUpButton } from "@/features/Auth/components/SignUpButton";
import { LoginButton } from "@/features/Auth/components/LoginButton";

export function Header() {
  return (
    <header>
      <nav className="mx-auto flex justify-between bg-(--home-primary-color) px-4 py-2.5 lg:px-6">
        <a href="" className="flex items-center">
          <span className="text-2xl font-semibold text-indigo-500">
            Chronicler
          </span>
        </a>
        <div className="flex items-center gap-2">
          <LoginButton />
          <SignUpButton primary />
        </div>
      </nav>
    </header>
  );
}
