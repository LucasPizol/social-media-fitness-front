import { PostModelWithAggregation } from "@/interfaces/post";
import { FormInstance } from "antd";
import { usePostFormModel } from "./model";
import { PostFormView } from "./view";

interface LoginFormProps {
  form: FormInstance;
  refetch: () => Promise<PostModelWithAggregation[]>;
}

export const PostForm = ({ form, refetch }: LoginFormProps) => {
  return <PostFormView {...usePostFormModel({ form, refetch })} />;
};
