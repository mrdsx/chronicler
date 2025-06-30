import { LoginForm } from "@/features/Auth/components/LoginForm";

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-primary-color)">
      <LoginForm />
    </div>
  );
}
