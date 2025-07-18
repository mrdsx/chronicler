import type { RegisterOptions } from "react-hook-form";
import type { AuthFormInputInt } from "../types";

export const emailOptions: RegisterOptions<AuthFormInputInt, "email"> = {
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
};

export const passwordOptions: RegisterOptions<AuthFormInputInt, "password"> = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
};
