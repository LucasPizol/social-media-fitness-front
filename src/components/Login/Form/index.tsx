import { FormInstance } from "antd";
import { useLoginForm } from "./model";
import { FormView } from "./view";

interface LoginFormProps {
  form: FormInstance;
}

export const LoginForm = ({ form }: LoginFormProps) => {
  return <FormView {...useLoginForm({ form })} />;
};
