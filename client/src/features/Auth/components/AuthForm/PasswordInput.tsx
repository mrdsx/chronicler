import { Input, Label } from "@/components/ui";
import type { AuthFormInputInt, AuthFormInputProps } from "../../types";

export function PasswordInput({
  register,
}: AuthFormInputProps<AuthFormInputInt>) {
  return (
    <div className="grid gap-3">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" required {...register("password")} />
    </div>
  );
}
