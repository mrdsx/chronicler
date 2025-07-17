const LOCAL_STORAGE_KEY = "access_token";

export function deleteUserAccessToken(): void {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function getUserAccessToken(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
}

export function setUserAccessToken(value: string): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, value);
}
