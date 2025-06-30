import { SignUpForm } from "@/features/Auth/components/SignUpForm";

export function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-primary-color)">
      <SignUpForm />
    </div>
  );
}
