import { Form, FormInstance, Input } from "antd";

interface ConfirmPasswordFieldProps {
  form: FormInstance;
}
export const ConfirmPasswordField = ({ form }: ConfirmPasswordFieldProps) => {
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
          validator(_, value) {
            return new Promise((res, rej) => {
              if (value !== form.getFieldValue("password")) {
                return rej("As senhas devem ser iguais!");
              }

              return res(value);
            });
          },
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
  );
};
