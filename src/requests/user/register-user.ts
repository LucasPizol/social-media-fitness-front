import { api } from "@/api/api";
import { AuthenticatedUserModel, UserModel } from "@/intefaces/user";

export const registerUser = async (
  data: Pick<UserModel, "email" | "name"> & { password: string }
): Promise<AuthenticatedUserModel> => {
  const { email, name, password } = data;

  return api
    .post<AuthenticatedUserModel>("/user/register", { email, name, password })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
