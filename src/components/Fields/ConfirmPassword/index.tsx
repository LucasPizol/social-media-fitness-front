import { Form, Input } from "antd";

export const ConfirmPasswordField = () => {
  return (
    <Form.Item
    name="confirmPassword"
    label="Confirme sua senha"
    rules={[
      { required: true, message: "Insira sua senha!" },
      {
        min: 6,
        message: "Sua senha deve ter pelo menos 6 digitos!",
      },
      {
        validator(_, value, callback) {
          if (value !== form.getFieldValue("password")) {
            callback("As senhas devem ser iguais!");
          }
          callback();
        },
      },
    ]}
  >
    <Input.Password />
  </Form.Item>
  );
};
