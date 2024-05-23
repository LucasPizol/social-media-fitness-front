import { FormInstance } from "antd";
import { usePostFormModel } from "./model";
import { PostFormView } from "./view";

interface LoginFormProps {
  form: FormInstance;
  refetch: () => Promise<void>;
}

export const PostForm = ({ form, refetch }: LoginFormProps) => {
  return <PostFormView {...usePostFormModel({ form, refetch })} />;
};
