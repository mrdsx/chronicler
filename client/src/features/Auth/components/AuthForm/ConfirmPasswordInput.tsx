import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../types";

export function ConfirmPasswordInput({
  register,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div className="grid gap-3">
      <Label htmlFor="confirm-password">Confirm password</Label>
      <Input
        id="confirm-password"
        type="password"
        required
        {...register("confirm_password")}
      />
    </div>
  );
}
