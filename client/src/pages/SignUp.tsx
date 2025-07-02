import { SignUpForm } from "@/features/Auth/components/SignUpForm";
import { Toaster } from "sonner";

export function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-primary-color)">
      <Toaster position="top-center" richColors />
      <SignUpForm />
    </div>
  );
}
