import { EmailField } from "@/components/Fields/Email";
import { PasswordField } from "@/components/Fields/Password";
import { RememberMeField } from "@/components/Fields/RememberMe";
import { Button, Form, Row } from "antd";
import { Link } from "react-router-dom";
import { useLoginForm } from "./model";

export const FormView = ({
  contextHolder,
  handleSubmit,
  isLoading,
  form,
}: ReturnType<typeof useLoginForm>) => {
  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      form={form}
      initialValues={{ rememberMe: false }}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 0,
      }}
    >
      {contextHolder}
      <EmailField />
      <PasswordField />

      <Row style={{ width: "100%" }} justify="space-between" align="middle">
        <RememberMeField />
        <Link to="/forgot-password" style={{ margin: 0, padding: 0 }}>
          Esqueci minha senha
        </Link>
      </Row>
      <Button
        onClick={form.submit}
        type="primary"
        loading={isLoading}
        style={{
          marginTop: 18,
        }}
      >
        Acessar
      </Button>
    </Form>
  );
};
