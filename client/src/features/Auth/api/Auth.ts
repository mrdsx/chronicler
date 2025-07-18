import type {
  LoginFormInputInt,
  SignUpFormInputInt,
} from "@/features/Auth/types";
import { apiClient, ENDPOINTS } from "@/api";
import type { AccessTokensResponse } from "./types";
import { getRequestOptions } from "../utils/requestOptions";

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
