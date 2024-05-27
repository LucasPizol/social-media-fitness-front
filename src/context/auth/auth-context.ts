import { createContext, useContext } from "react";
import {
  UserCredentialsModel,
  UserModel,
  UserRegisterModel,
} from "../../interfaces/user";

export const AuthContext = createContext(null as any);

export interface AuthContextProps {
  signOut: () => void;
  signIn: (credentials: UserCredentialsModel) => Promise<UserModel>;
  register: (data: UserRegisterModel) => Promise<UserModel>;

  isLoading: boolean;
  user: UserModel | null;
  isPageLoading: boolean;
}

export const useAuthContext = () => {
  const context = useContext<AuthContextProps>(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
