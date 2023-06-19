export interface UserStoreState {
  isLoggedIn: boolean;
  username  : string;

  login     : (username: string, password: string) => void;
  logout    : () => void;
}