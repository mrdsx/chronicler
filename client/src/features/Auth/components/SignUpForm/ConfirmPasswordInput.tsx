import { Input, Label } from "@/components/ui";
import type { UseFormRegister } from "react-hook-form";
import type { SignUpFormInputInt } from "../../types";

interface ConfirmPasswordInputProps {
  register: UseFormRegister<SignUpFormInputInt>;
}

export function ConfirmPasswordInput({ register }: ConfirmPasswordInputProps) {
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
