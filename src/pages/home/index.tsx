import { PostForm } from "@/components/Home/PostForm";
import { PostComponent } from "@/components/Post";
import { useLoadApi } from "@/hooks/useLoadApi";
import { PostModelWithAggregation } from "@/intefaces/post";
import { loadPost } from "@/requests/post/load-post";
import { Col, Form, Spin } from "antd";

export const HomePage = () => {
  const [form] = Form.useForm();
  const { data, refetch, isLoading } = useLoadApi<PostModelWithAggregation[]>(
    () => loadPost()
  );

  return (
    <Col
      style={{
        gap: 12,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "0.5s",
        maxWidth: 800,
        minHeight: "100vh",
      }}
    >
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <PostForm refetch={refetch} form={form} />

          {data?.map((post) => (
            <PostComponent post={post} />
          ))}
        </>
      )}
    </Col>
  );
};
