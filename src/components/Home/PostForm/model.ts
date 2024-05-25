import { AddPostModel } from "@/intefaces/post";
import { addPost } from "@/requests/post/add-post";
import { FormInstance, UploadFile, message } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import { useState } from "react";

interface PostFormProps {
  form: FormInstance;
  refetch: () => Promise<void>;
}

export interface UploadProp extends UploadFile {
  key: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
}

export const usePostFormModel = ({ form, refetch }: PostFormProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<UploadProp[]>([]);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);

  const handleChangeFile = async (data: UploadChangeParam<UploadFile<any>>) => {
    const { file } = data;

    if (file.status === "removed") {
      const filter = files.filter((f) => f.uid !== file.uid);

      setFiles(filter);
    } else {
      const filter = [...files, file];

      setFiles(filter as UploadProp[]);
    }
  };

  const handleSubmit = async (values: AddPostModel) => {
    try {
      setLoading(true);

      const promises = files.map((file) => file.arrayBuffer());

      const resolvedPromises = await Promise.all(promises);

      const data = resolvedPromises.map(
        (file) => new File([new Blob([file])], "data.png")
      );

      await addPost(values, data);
      refetch();
      messageApi.success("Post adicionado com sucesso");
      setPreviewFiles([]);
      setFiles([]);
      form.resetFields();
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
