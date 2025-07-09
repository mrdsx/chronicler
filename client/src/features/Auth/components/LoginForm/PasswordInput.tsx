import { Input, Label } from "@/components/ui";
import type { UseFormRegister } from "react-hook-form";
import type { LoginFormInputInt } from "../../types";

interface PasswordInputProps {
  register: UseFormRegister<LoginFormInputInt>;
}

export function PasswordInput({ register }: PasswordInputProps) {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-10">
        <Label htmlFor="password">Password</Label>
      </div>
      <Input id="password" type="password" required {...register("password")} />
    </div>
  );
}
