import { api } from "../../api/api";

export const getUserById = async (uuid: string) => {
  return api
    .get("/user/" + uuid)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
