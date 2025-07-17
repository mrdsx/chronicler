import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../types";
import { usernameOptions } from "../../constants";

export function UsernameInput({
  register,
  error,
}: AuthFormInputProps<SignUpFormInputInt>) {
  console.log(error);

  return (
    <div>
      <Label htmlFor="username">Username</Label>
      <Input
        className="mt-3 mb-1"
        id="username"
        required
        {...register("username", usernameOptions)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
