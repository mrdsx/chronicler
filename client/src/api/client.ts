const API_BASE_URL = "http://127.0.0.1:3000/api";

export async function apiClient(path: string, options?: RequestInit) {
  return await fetch(`${API_BASE_URL}${path}`, options);
}
