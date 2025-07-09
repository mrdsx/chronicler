import { Input, Label } from "@/components/ui";
import type { UseFormRegister } from "react-hook-form";
import type { SignUpFormInputInt } from "../../types";

interface PasswordInputProps {
  register: UseFormRegister<SignUpFormInputInt>;
}

export function PasswordInput({ register }: PasswordInputProps) {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-10">
        <Label htmlFor="password">Password</Label>
      </div>
      <Input
        id="password"
        type="password"
        placeholder="m@example.com"
        required
        {...register("password")}
      />
    </div>
  );
}
