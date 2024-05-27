import { useAuthContext } from "@/context/auth/auth-context";
import { PostModelWithAggregation } from "@/interfaces/post";
import { likePost } from "@/requests/like/like-post";
import { unlikePost } from "@/requests/like/unlike-post";
import { Row } from "antd";
import { useEffect, useState } from "react";
import { PostFooterHeart } from "./Heart";

export interface PostFooterProps {
  post: PostModelWithAggregation;
}

export const PostFooter = ({ post }: PostFooterProps) => {
  const { user } = useAuthContext();
  const [heart, setHeart] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const liked = post.likes.find((like) => like.likedBy.id === user?.id);

    setHeart(!!liked);
  }, [user]);

  const handleLikePost = async () => {
    try {
      if (loading) return;

      setLoading(true);

      if (heart) await unlikePost(post.id);
      else await likePost(post.id);

      setHeart((prev) => !prev);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <Row style={{ padding: 12, paddingTop: !!post.postMedia.length ? 12 : 0 }}>
      <PostFooterHeart isFilled={heart} handleLikePost={handleLikePost} />
    </Row>
  );
};
