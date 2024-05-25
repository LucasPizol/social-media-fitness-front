import { PostModelWithAggregation } from "@/intefaces/post";
import { Image, Row, Typography } from "antd";

export interface PostHeaderProps {
  post: PostModelWithAggregation;
}

export const PostContent = ({ post }: PostHeaderProps) => {
  return (
    <Row style={{ width: "100%" }}>
      <Row style={{ padding: 12, paddingTop: 0 }}>
        <Typography.Text style={{ color: "#e0e1e2" }}>
          {post.content}
        </Typography.Text>
      </Row>

      <Row
        align="middle"
        justify="center"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: post.postMedia.length > 1 ? "1fr 1fr" : "1fr",
          gap: 12,
        }}
      >
        {post.postMedia.map(({ url }) => (
          <Image
            src={url}
            style={{
              aspectRatio: "1/1",
              objectFit: "contain",
              flex: 1,
              background: "#36373a",
            }}
          />
        ))}
      </Row>
    </Row>
  );
};
