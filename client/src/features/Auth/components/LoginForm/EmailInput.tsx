import { Input } from "@/components/ui";
import { Label } from "@radix-ui/react-label";
import type { UseFormRegister } from "react-hook-form";
import type { LoginFormInputInt } from "../../types";

interface EmailInputProps {
  register: UseFormRegister<LoginFormInputInt>;
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
