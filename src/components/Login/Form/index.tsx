import sessionManagement from "@/api/session-management";
import { EmailField } from "@/components/Fields/Email";
import { PasswordField } from "@/components/Fields/Password";
import { RememberMeField } from "@/components/Fields/RememberMe";
import { useAuthContext } from "@/context/auth/auth-context";
import { Button, Form, FormInstance, Row, message } from "antd";
import { Link } from "react-router-dom";

interface LoginFormProps {
  form: FormInstance;
}

export const LoginForm = ({ form }: LoginFormProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { signIn, isLoading } = useAuthContext();

  const handleSubmit = async () => {
    const [email, password] = [
      form.getFieldValue("email"),
      form.getFieldValue("password"),
    ];

    try {
      await signIn({ email, password });

      if (form.getFieldValue("rememberMe")) {
        sessionManagement.setCredentials({
          email,
          password,
        });
      }
    } catch (error) {
      messageApi.error("Usuário ou senha incorretos");
    }
  };
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
