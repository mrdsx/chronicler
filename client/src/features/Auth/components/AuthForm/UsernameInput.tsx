import { Input, Label } from "@/components/ui";
import type { AuthFormInputProps, SignUpFormInputInt } from "../../types";
import { SIGNUP_FORM_VALIDATION_OPTIONS } from "../../constants";

export function UsernameInput({
  register,
  error,
}: AuthFormInputProps<SignUpFormInputInt>) {
  return (
    <div>
      <Label htmlFor="username">Username</Label>
      <Input
        className="mt-3 mb-1"
        id="username"
        required
        {...register("username", SIGNUP_FORM_VALIDATION_OPTIONS.username)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
