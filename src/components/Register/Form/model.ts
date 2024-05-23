import { useAuthContext } from "@/context/auth/auth-context";
import { message } from "antd";
import { FormInstance } from "antd/es/form";

interface RegisterFormProps {
  form: FormInstance;
}

export const useRegisterForm = ({ form }: RegisterFormProps) => {
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

  return { form, contextHolder, isLoading, handleSubmit };
};
