import { PostForm } from "@/components/Home/PostForm";
import { PostComponent } from "@/components/Post";
import { useLoadApi } from "@/hooks/useLoadApi";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { PostModelWithAggregation } from "@/interfaces/post";
import { loadPost } from "@/requests/post/load-post";
import { Col, Form, Spin } from "antd";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [form] = Form.useForm();
  const [postCount, setPostCount] = useState<number>(0);
  const [allData, setAllData] = useState<PostModelWithAggregation[]>([]);

  const scrollPosition = useScrollPosition();

  const { data, refetch, isLoading } =
    useLoadApi<PostModelWithAggregation[]>(loadPost);

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight) {
      refetch(postCount + 10).then((data) => {
        if (data.length === 0) return;
        setPostCount((prev) => prev + 10);
      });
      setPostCount((prev) => prev + 10);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (data) setAllData((prev) => [...prev, ...data]);
  }, [data]);

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
      <PostForm refetch={refetch} form={form} />

      {allData?.map((post) => (
        <PostComponent post={post} />
      ))}
      {isLoading && <Spin />}
    </Col>
  );
};
