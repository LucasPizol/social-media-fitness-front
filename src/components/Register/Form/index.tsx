import { FormInstance } from "antd";
import { useRegisterForm } from "./model";
import { FormView } from "./view";

interface RegisterFormProps {
  form: FormInstance;
}
export const RegisterForm = ({ form }: RegisterFormProps) => {
  return <FormView {...useRegisterForm({ form })} />;
};
