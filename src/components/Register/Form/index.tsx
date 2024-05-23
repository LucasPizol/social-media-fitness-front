import { ConfirmPasswordField } from "@/components/Fields/ConfirmPassword";
import { EmailField } from "@/components/Fields/Email";
import { NameField } from "@/components/Fields/Name";
import { PasswordField } from "@/components/Fields/Password";
import { useAuthContext } from "@/context/auth/auth-context";
import { Button, Form, FormInstance, message } from "antd";

interface RegisterFormProps {
  form: FormInstance;
}
export const RegisterForm = ({ form }: RegisterFormProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { register, isLoading } = useAuthContext();

  const handleSubmit = async () => {
    const [email, password, confirmPassword, name] = [
      form.getFieldValue("email"),
      form.getFieldValue("password"),
      form.getFieldValue("confirmPassword"),
      form.getFieldValue("name"),
    ];

    if (password !== confirmPassword) {
      messageApi.error("As senhas não conferem");
      return;
    }

    try {
      await register({ email, password, name });
    } catch (error) {
      messageApi.error("Ocorreu um erro ao registrar o usuário");
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
      <NameField />
      <EmailField />
      <PasswordField />
      <ConfirmPasswordField form={form} />
      <Button
        onClick={form.submit}
        type="primary"
        loading={isLoading}
        style={{
          marginTop: 18,
        }}
      >
        Cadastrar
      </Button>
    </Form>
  );
};
