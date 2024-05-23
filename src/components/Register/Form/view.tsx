import { ConfirmPasswordField } from "@/components/Fields/ConfirmPassword";
import { EmailField } from "@/components/Fields/Email";
import { NameField } from "@/components/Fields/Name";
import { PasswordField } from "@/components/Fields/Password";
import { Button, Form } from "antd";
import { useRegisterForm } from "./model";

export const FormView = ({
  form,
  contextHolder,
  handleSubmit,
  isLoading,
}: ReturnType<typeof useRegisterForm>) => {
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
