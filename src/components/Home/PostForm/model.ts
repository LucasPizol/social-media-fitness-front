import { AddPostModel } from "@/intefaces/post";
import { addPost } from "@/requests/post/add-post";
import { FormInstance, UploadFile, message } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import { useState } from "react";

interface PostFormProps {
  form: FormInstance;
  refetch: () => Promise<void>;
}

const getBase64 = (file: any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const usePostFormModel = ({ form, refetch }: PostFormProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);

  const handleChangeFile = async (data: UploadChangeParam<UploadFile<any>>) => {
    const { file } = data;

    if (file.status === "removed") {
      const filter = files.filter((f) => f.uid !== file.uid);

      setFiles(filter);
    } else {
      const filter = [...files, file];

      setFiles(filter);
    }
  };

  const handleSubmit = async (values: AddPostModel) => {
    try {
      setLoading(true);
      await addPost(values);
      await refetch();
      messageApi.success("Post adicionado com sucesso");
    } catch (error) {
      messageApi.error("Ocorreu um erro ao adicionar seu post");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    contextHolder,
    handleSubmit,
    loading,
    handleChangeFile,
    previewFiles,
    setPreviewFiles,
  };
};
