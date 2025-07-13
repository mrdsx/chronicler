import type {
  LoginFormInputInt,
  SignUpFormInputInt,
} from "@/features/Auth/types";
import { apiClient } from "@/api";
import type { AccessTokensResponse } from "./types";
import { AUTH_ENDPOINTS } from "./constants";
import { getRequestOptions } from "../utils/requestOptions";

export async function loginUser(
  loginFormData: LoginFormInputInt,
): Promise<AccessTokensResponse> {
  const requestOptions = getRequestOptions(loginFormData, "POST");

  return await apiClient(
    AUTH_ENDPOINTS.login,
    requestOptions,
    "An unexpected error occurred while logging in",
  );
}

export async function registerUser(
  signUpFormData: SignUpFormInputInt,
): Promise<AccessTokensResponse> {
  const requestOptions = getRequestOptions(signUpFormData, "POST");

  return await apiClient(
    AUTH_ENDPOINTS.signup,
    requestOptions,
    "An unexpected error occurred while signing up",
  );
}
