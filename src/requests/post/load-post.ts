import { api } from "@/api/api";
import { PostModelWithAggregation } from "@/interfaces/post";

export const loadPost = async (
  postCount: number,
  userId?: number
): Promise<PostModelWithAggregation[]> => {
  return api
    .get("/post", {
      params: {
        postCount: postCount || 0,
        userId,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
