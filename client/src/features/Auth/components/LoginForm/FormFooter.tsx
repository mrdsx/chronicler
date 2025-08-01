import { SignUpBtn } from "@/features/auth/components";

export function FormFooter() {
  return (
    <div className="text-center text-sm">
      Don't have an account?{" "}
      <SignUpBtn className="p-0" variant="link" size="sm" />
    </div>
  );
}
