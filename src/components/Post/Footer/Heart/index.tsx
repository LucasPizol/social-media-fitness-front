import { BsHeart, BsHeartFill } from "react-icons/bs";

export interface HeartProps {
  isFilled: boolean;
  handleLikePost: () => Promise<void>;
}

export const PostFooterHeart = ({ isFilled, handleLikePost }: HeartProps) => {
  if (isFilled)
    return (
      <BsHeartFill
        size={15}
        onClick={handleLikePost}
        color="#e27272"
        style={{
          cursor: "pointer",
        }}
      />
    );

  return (
    <BsHeart
      size={15}
      onClick={handleLikePost}
      color="#e27272"
      style={{
        cursor: "pointer",
      }}
    />
  );
};
