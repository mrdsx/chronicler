import type {
  LoginFormInputInt,
  SignUpFormInputInt,
} from "@/features/Auth/types";
import { apiClient, ENDPOINTS, getRequestOptions } from "@/api";
import type { AccessTokensResponse } from "./types";

export async function loginUser(loginFormData: LoginFormInputInt) {
  const requestOptions = getRequestOptions(loginFormData, "POST");

  return await apiClient<AccessTokensResponse>(
    ENDPOINTS.auth.login,
    requestOptions,
    "An unexpected error occurred while logging in",
  );
}

export async function registerUser(signUpFormData: SignUpFormInputInt) {
  const requestOptions = getRequestOptions(signUpFormData, "POST");

  return await apiClient<AccessTokensResponse>(
    ENDPOINTS.auth.register,
    requestOptions,
    "An unexpected error occurred while signing up",
  );
}
