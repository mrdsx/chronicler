import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps } from "../../types";

export function PasswordInput({ register }: AuthFormInputProps) {
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
