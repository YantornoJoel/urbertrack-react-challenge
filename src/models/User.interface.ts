export interface UserStoreState {
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  username: string;
}