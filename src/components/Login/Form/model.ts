import sessionManagement from "@/api/session-management";
import { useAuthContext } from "@/context/auth/auth-context";
import { FormInstance, message } from "antd";

interface LoginFormProps {
  form: FormInstance;
}

export const useLoginForm = ({ form }: LoginFormProps) => {
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

  return { contextHolder, isLoading, handleSubmit, form };
};
