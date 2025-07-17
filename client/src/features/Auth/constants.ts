import type { RegisterOptions } from "react-hook-form";
import type { AuthFormInputInt } from "./types";

export const usernameOptions: RegisterOptions<AuthFormInputInt, "username"> = {
  required: "Username is required",
  minLength: {
    value: 3,
    message: "Username must be at least 3 characters",
  },
  maxLength: {
    value: 20,
    message: "Username must be at most 20 characters",
  },
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message: "Username can only contain letters, numbers, and underscores",
  },
};
