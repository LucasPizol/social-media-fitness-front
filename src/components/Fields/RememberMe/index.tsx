import { Checkbox, Form } from "antd";

export const RememberMeField = () => {
  return (
    <Form.Item labelAlign="right" valuePropName="checked">
      <Checkbox name="rememberMe" title="Lembrar-me" id="rememberMe" />
      <label style={{ marginLeft: 4 }} htmlFor="rememberMe">
        Lembrar-me
      </label>
    </Form.Item>
  );
};
