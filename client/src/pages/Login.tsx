import { LoginForm } from "@/features/Auth/components/LoginForm";
import { Toaster } from "sonner";

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-primary-color)">
      <Toaster position="top-center" richColors />
      <LoginForm />
    </div>
  );
}
