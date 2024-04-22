import { useEffect, useState } from "react";
import sessionManagement from "../../api/session-management";
import { UserCredentialsModel, UserModel } from "../../intefaces/user";
import { authenticateUser } from "../../requests/user/authenticate-user";
import { AuthContext } from "./auth-context";
import { getAuthenticatedUser } from "../../requests/user/get-authenticated-user";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const verifyUserSession = async () => {
    const token = sessionManagement.getAccessToken();
    if (!token) return null;
    setIsLoading(true);

    try {
      const authenticatedUser = await getAuthenticatedUser();
      setUser(authenticatedUser);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyUserSession();
  }, []);

  const signIn = async (credentials: UserCredentialsModel) => {
    try {
      const authenticate = await authenticateUser(credentials);

      sessionManagement.setAccessToken(authenticate.token);

      const user = {
        ...authenticate,
        token: undefined,
      };

      setUser(user);

      return authenticate;
    } catch (err) {
      throw err;
    }
  };

  const signOut = () => {
    setUser(null);
    sessionManagement.clearAuthData();
  };

  return (
    <AuthContext.Provider value={{ signOut, signIn, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
