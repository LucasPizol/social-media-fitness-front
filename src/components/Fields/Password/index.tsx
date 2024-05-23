import { Form, Input } from "antd";

export const PasswordField = () => {
  return (
    <Form.Item
      name="password"
      label="Senha"
      rules={[
        { required: true, message: "Insira sua senha!" },
        {
          min: 6,
          message: "Sua senha deve ter pelo menos 6 digitos!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
  );
};
