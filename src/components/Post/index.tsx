import { PostModelWithLikes } from "@/intefaces/post";
import { formatDate } from "@/utils/format-date";
import { UserOutlined } from "@ant-design/icons";
import { Col, Image, Row, Typography } from "antd";
import styles from "./styles.module.css";

interface PostComponentProps {
  post: PostModelWithLikes;
}

export const PostComponent = ({ post }: PostComponentProps) => {
  return (
    <Row
      className={styles.post}
      style={{
        padding: 12,
        border: "1px solid #e4e4e4",
        borderRadius: 8,
        gap: 12,
      }}
    >
      <Col style={{ flex: 1, maxWidth: 30 }}>
        {post.user.avatar ? (
          <Image src={post.user.avatar} width={30} height={30} />
        ) : (
          <UserOutlined
            style={{
              fontSize: 30,
            }}
          />
        )}
      </Col>
      <Col style={{ flex: 1 }}>
        <Row>
          <Typography.Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {post.user.name}
          </Typography.Text>
        </Row>
        <Typography.Paragraph>{post.content}</Typography.Paragraph>
        {post.mediaUrl && (
          <Image
            src={post.mediaUrl}
            style={{
              border: "1px solid #e4e4e4",
              borderRadius: 12,
            }}
          />
        )}

        <Typography.Text>{formatDate(post.createdAt)}</Typography.Text>
      </Col>
    </Row>
  );
};
