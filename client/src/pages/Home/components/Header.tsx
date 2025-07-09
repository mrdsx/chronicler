import { Logo } from "@/components/Logo";
import { LoginBtn, SignUpBtn } from "@/features/Auth/components";

export function Header() {
  return (
    <header>
      <nav className="mx-auto flex justify-between bg-(--home-background) px-4 py-2.5 lg:px-6">
        <Logo className="flex font-semibold text-indigo-500" />
        <div className="flex items-center gap-2">
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </div>
      </nav>
    </header>
  );
}
