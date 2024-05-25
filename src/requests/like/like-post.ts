import { api } from "@/api/api";

export const likePost = async (postId: number) => {
  return api
    .patch(`/like-post/like/${postId}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
