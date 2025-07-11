import { Input, Label } from "@/components/ui";
import type { AuthFormInputInt, AuthFormInputProps } from "../../types";

export function EmailInput({ register }: AuthFormInputProps<AuthFormInputInt>) {
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
