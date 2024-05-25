import { api } from "@/api/api";

export const unlikePost = async (postId: number) => {
  return api
    .patch(`/like-post/unlike/${postId}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
