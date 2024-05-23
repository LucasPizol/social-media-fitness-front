import { Form, Input } from "antd";

export const NameField = () => {
  return (
    <Form.Item
      name="name"
      label="Nome completo"
      rules={[{ required: true, message: "Insira seu nome!" }]}
    >
      <Input />
    </Form.Item>
  );
};
