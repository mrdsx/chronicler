import { Input, Label } from "@/components/ui";
import type { AuthFormInputInt, AuthFormInputProps } from "../../../types";
import "./AuthFormInput.css";

export function PasswordInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<AuthFormInputInt>) {
  return (
    <div>
      <Label htmlFor="password">Password</Label>
      <Input
        className="auth-form-input"
        id="password"
        type="password"
        required
        {...register("password", registerOptions)}
      />
      {error && <p className="auth-form-input__error-msg">{error.message}</p>}
    </div>
  );
}
