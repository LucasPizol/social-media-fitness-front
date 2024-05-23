import { api } from "@/api/api";
import { AddPostModel, PostModel } from "@/intefaces/post";

export const addPost = async (values: AddPostModel): Promise<PostModel> => {
  return api
    .post("/post", values)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
