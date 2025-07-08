import { LoginBtn, SignUpBtn } from "@/features/Auth/components";
import { ROUTES } from "@/routes";

export function Header() {
  return (
    <header>
      <nav className="mx-auto flex justify-between bg-(--home-background) px-4 py-2.5 lg:px-6">
        <a href={ROUTES.HOME} className="flex items-center">
          <span className="text-2xl font-semibold text-indigo-500">
            Chronicler
          </span>
        </a>
        <div className="flex items-center gap-2">
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </div>
      </nav>
    </header>
  );
}
