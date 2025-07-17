export interface UserData {
  getUserData(): Promise<User | null>;
}

export interface User {
  id: number;
  username: string;
  email: string;
  hashed_password: string;
}
