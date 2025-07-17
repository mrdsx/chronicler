export interface UserData {
  getUserData(): Promise<User | null>;
}

export type User = {
  id: number;
  username: string;
  email: string;
  hashed_password: string;
};
