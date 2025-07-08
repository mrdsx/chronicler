import { LoginForm } from "@/features/Auth/components";
import { Toaster } from "sonner";

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-background)">
      <Toaster position="top-center" richColors />
      <LoginForm />
    </div>
  );
}
