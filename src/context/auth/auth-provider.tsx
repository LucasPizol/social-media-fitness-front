import { useEffect, useState } from "react";
import sessionManagement from "../../api/session-management";
import {
  UserCredentialsModel,
  UserModel,
  UserRegisterModel,
} from "../../intefaces/user";
import { authenticateUser } from "../../requests/user/authenticate-user";
import { AuthContext } from "./auth-context";
import { getAuthenticatedUser } from "../../requests/user/get-authenticated-user";
import { registerUser } from "../../requests/user/register-user";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);

  const verifyUserSession = async () => {
    const token = sessionManagement.getAccessToken();
    if (!token) return null;
    setIsPageLoading(true);

    try {
      const authenticatedUser = await getAuthenticatedUser();
      setUser(authenticatedUser);
    } catch (error) {
      setUser(null);
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    verifyUserSession();
  }, []);

  const signIn = async (credentials: UserCredentialsModel) => {
    try {
      setIsLoading(true);

      const authenticate = await authenticateUser(credentials);

      sessionManagement.setAccessToken(authenticate.token);

      const user = {
        ...authenticate,
        token: undefined,
      };

      setUser(user);
      setIsLoading(false);

      return authenticate;
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  const signOut = () => {
    setUser(null);
    sessionManagement.clearAuthData();
  };

  const register = async (data: UserRegisterModel) => {
    setIsLoading(true);
    try {
      const user = await registerUser(data);

      sessionManagement.setAccessToken(user.token);

      setUser(user);
      setIsLoading(false);
      return user;
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{ signOut, signIn, user, isLoading, register, isPageLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
