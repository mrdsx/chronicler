export interface UserData {
  getUserData(signal: AbortSignal): Promise<User | null>;
}

export interface User {
  id: number;
  username: string;
  email: string;
}
