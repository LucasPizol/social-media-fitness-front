import { Form, Input } from "antd";

export const PostTextArea = () => {
  return (
    <Form.Item
      name="content"
      style={{
        margin: 0,
        width: "100%",
      }}
    >
      <Input.TextArea
        style={{
          border: "none",
          borderBottom: "1px solid #e4e4e4",
          background: "#fff",
        }}
      />
    </Form.Item>
  );
};
