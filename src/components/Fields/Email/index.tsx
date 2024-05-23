import { Form, Input } from "antd";

export const EmailField = () => {
  return (
    <Form.Item
      name="email"
      label="E-mail"
      rules={[{ required: true, message: "Insira seu e-mail!" }]}
    >
      <Input type="email" />
    </Form.Item>
  );
};
