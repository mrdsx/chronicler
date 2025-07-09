import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../types";

export function UsernameInput({
  register,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div className="grid gap-3">
      <Label htmlFor="username">Username</Label>
      <Input id="username" required {...register("username")} />
    </div>
  );
}
