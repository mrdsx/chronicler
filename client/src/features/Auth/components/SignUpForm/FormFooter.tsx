import { LoginBtn } from "../LoginBtn";

export function FormFooter() {
  return (
    <div className="text-center text-sm">
      Already have an account? <LoginBtn className="p-0" variant="link" />
    </div>
  );
}
