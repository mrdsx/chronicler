import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../../types";
import "./AuthFormInput.css";

export function UsernameInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div>
      <Label htmlFor="username">Username</Label>
      <Input
        className="auth-form-input"
        id="username"
        required
        {...register("username", registerOptions)}
      />
      {error && <p className="auth-form-input__error-msg">{error.message}</p>}
    </div>
  );
}
