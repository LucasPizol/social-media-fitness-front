import { api } from "@/api/api";
import { AuthenticatedUserModel, UserCredentialsModel } from "@/intefaces/user";

export const authenticateUser = async (
  data: UserCredentialsModel
): Promise<AuthenticatedUserModel> => {
  const { email, password } = data;

  return api
    .post<AuthenticatedUserModel>("/user/login", { email, password })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
