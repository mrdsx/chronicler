import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../types";

export function UsernameInput({
  register,
  error,
  registerOptions,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div>
      <Label htmlFor="username">Username</Label>
      <Input
        className="mt-3 mb-1"
        id="username"
        required
        {...register("username", registerOptions)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
