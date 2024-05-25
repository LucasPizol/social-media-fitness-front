import { PostModelWithAggregation } from "@/intefaces/post";
import { getMinimalDate } from "@/utils/get-minimal-date";
import { Col, Row, Typography } from "antd";
import { Avatar } from "../Avatar";

export interface PostHeaderProps {
  post: PostModelWithAggregation;
}

export const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <Row style={{ gap: 8, padding: 12, paddingBottom: 0 }}>
      <Avatar url={post.user.avatar} />
      <Col
        flex={1}
        style={{
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Typography.Text
          style={{
            color: "#ced3d6",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 1,
          }}
        >
          {post.user.name}
        </Typography.Text>
        <Typography.Text
          style={{
            lineHeight: 1,
            color: "#a5aaad",
            fontSize: 12,
          }}
        >
          {getMinimalDate(new Date(post.createdAt))}
        </Typography.Text>
      </Col>
    </Row>
  );
};
