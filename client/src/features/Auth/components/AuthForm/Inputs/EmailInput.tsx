import { Input, Label } from "@/components/ui";
import type {
  AuthFormInputInt,
  AuthFormInputProps,
} from "@/features/auth/types";
import "./AuthFormInput.css";

export function EmailInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<AuthFormInputInt>) {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        className="auth-form-input"
        id="email"
        type="email"
        placeholder="m@example.com"
        required
        {...register("email", registerOptions)}
      />
      {error && <p className="auth-form-input__error-msg">{error.message}</p>}
    </div>
  );
}
