import { Input, Label } from "@/components/ui";
import type { UseFormRegister } from "react-hook-form";
import type { SignUpFormInputInt } from "../../types";

interface UsernameInputProps {
  register: UseFormRegister<SignUpFormInputInt>;
}

export function UsernameInput({ register }: UsernameInputProps) {
  return (
    <div className="grid gap-3">
      <Label htmlFor="username">Username</Label>
      <Input id="username" required {...register("username")} />
    </div>
  );
}
