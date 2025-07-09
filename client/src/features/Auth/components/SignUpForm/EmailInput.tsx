import { Input, Label } from "@/components/ui";
import type { UseFormRegister } from "react-hook-form";
import type { SignUpFormInputInt } from "../../types";

interface EmailInputProps {
  register: UseFormRegister<SignUpFormInputInt>;
}

export function EmailInput({ register }: EmailInputProps) {
  return (
    <div className="grid gap-3">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        required
        {...register("email")}
      />
    </div>
  );
}
