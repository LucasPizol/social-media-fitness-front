import { PostForm } from "@/components/Home/PostForm";
import { PostComponent } from "@/components/Post";
import { useLoadApi } from "@/hooks/useLoadApi";
import { PostModelWithLikes } from "@/intefaces/post";
import { loadPost } from "@/requests/post/load-post";
import { Col, Form } from "antd";

export const HomePage = () => {
  const [form] = Form.useForm();
  const { data, refetch } = useLoadApi<PostModelWithLikes[]>(() => loadPost());

  return (
    <Col
      span={8}
      style={{
        gap: 12,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PostForm refetch={refetch} form={form} />

      {data?.map((post) => (
        <PostComponent post={post} />
      ))}
    </Col>
  );
};
