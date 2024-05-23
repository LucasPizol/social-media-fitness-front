import { api } from "@/api/api";
import { PostModelWithLikes } from "@/intefaces/post";

export const loadPost = async (): Promise<PostModelWithLikes[]> => {
  return api
    .get("/post")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
