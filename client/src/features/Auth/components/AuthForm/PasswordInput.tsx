import { Input, Label } from "@/components/ui";
import type { AuthFormInputInt, AuthFormInputProps } from "../../types";
import { passwordOptions } from "../../constants";

export function PasswordInput({
  register,
  error,
}: AuthFormInputProps<AuthFormInputInt>) {
  return (
    <div>
      <Label htmlFor="password">Password</Label>
      <Input
        className="mt-3 mb-1"
        id="password"
        type="password"
        required
        {...register("password", passwordOptions)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
