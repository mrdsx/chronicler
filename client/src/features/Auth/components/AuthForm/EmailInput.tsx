import { Input, Label } from "@/components/ui";
import type { AuthFormInputInt, AuthFormInputProps } from "../../types";
import { SIGNUP_FORM_VALIDATION_OPTIONS } from "../../constants";

export function EmailInput({
  register,
  error,
}: AuthFormInputProps<AuthFormInputInt>) {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        className="mt-3 mb-1"
        id="email"
        type="email"
        placeholder="m@example.com"
        required
        {...register("email", SIGNUP_FORM_VALIDATION_OPTIONS.email)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
