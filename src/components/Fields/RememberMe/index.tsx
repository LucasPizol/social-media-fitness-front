import { Checkbox, Form } from "antd";

export const RememberMeField = () => {
  return (
    <Form.Item valuePropName="checked" label="Lembrar-me">
      <Checkbox name="rememberMe" title="Lembrar-me" />
    </Form.Item>
  );
};
