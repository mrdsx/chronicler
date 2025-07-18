import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../../types";

// TODO: extract error msg and Input styles
export function ConfirmPasswordInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div>
      <Label htmlFor="confirm-password">Confirm password</Label>
      <Input
        className="mt-3 mb-1"
        id="confirm-password"
        type="password"
        required
        {...register("confirm_password", registerOptions)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
