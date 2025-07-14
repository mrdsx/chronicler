import { LoginForm } from "@/features/Auth/components";

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-background)">
      <LoginForm />
    </div>
  );
}
