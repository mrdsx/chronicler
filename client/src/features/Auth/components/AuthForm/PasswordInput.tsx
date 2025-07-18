import { Input, Label } from "@/components/ui";
import type { AuthFormInputInt, AuthFormInputProps } from "../../types";

export function PasswordInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<AuthFormInputInt>) {
  return (
    <div>
      <Label htmlFor="password">Password</Label>
      <Input
        className="mt-3 mb-1"
        id="password"
        type="password"
        required
        {...register("password", registerOptions)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
