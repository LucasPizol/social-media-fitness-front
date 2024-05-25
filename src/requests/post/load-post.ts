import { api } from "@/api/api";
import { PostModelWithAggregation } from "@/intefaces/post";

export const loadPost = async (): Promise<PostModelWithAggregation[]> => {
  return api
    .get("/post")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
