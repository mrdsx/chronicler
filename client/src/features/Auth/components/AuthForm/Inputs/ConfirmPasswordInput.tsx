import { Input, Label } from "@/components/ui";
import type {
  AuthFormInputProps,
  SignUpFormInputInt,
} from "@/features/auth/types";
import "./AuthFormInput.css";

export function ConfirmPasswordInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div>
      <Label htmlFor="confirm-password">Confirm password</Label>
      <Input
        className="auth-form-input"
        id="confirm-password"
        type="password"
        required
        {...register("confirm_password", registerOptions)}
      />
      {error && <p className="auth-form-input__error-msg">{error.message}</p>}
    </div>
  );
}
