import { PostModelWithAggregation } from "@/intefaces/post";
import { Row } from "antd";
import { PostContent } from "./Content";
import { PostFooter } from "./Footer";
import { PostHeader } from "./Header";

interface PostComponentProps {
  post: PostModelWithAggregation;
}

export const PostComponent = ({ post }: PostComponentProps) => {
  return (
    <Row
      style={{
        borderRadius: 8,
        background: "#424242",
        color: "#f7f7f7",
      }}
    >
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </Row>
  );
};
