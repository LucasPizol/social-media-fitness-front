import { api } from "../../api/api";
import { UserModel } from "../../intefaces/user";

export const getAuthenticatedUser = async (): Promise<UserModel> => {
  return api
    .get<UserModel>("/user")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
