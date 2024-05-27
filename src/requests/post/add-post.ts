import { api } from "@/api/api";
import { AddPostModel, PostModel } from "@/interfaces/post";

export const addPost = async (
  values: AddPostModel,
  files?: File[]
): Promise<PostModel> => {
  const formData = new FormData();

  const { content } = values;

  formData.append("content", content);

  if (files) files.forEach((file) => formData.append("files[]", file));

  return api
    .post("/post", formData)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
