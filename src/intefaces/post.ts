import { UserModel } from "./user";

export interface PostModel {
  id: number;
  content: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  disabledAt: Date | null;
  isDisabled: boolean;
}

export interface AddPostModel {
  content: string;
  userId: number;
}

export interface PostModelWithAggregation extends PostModel {
  likes: { likedBy: Pick<UserModel, "avatar" | "id" | "name"> }[];
  user: Pick<UserModel, "avatar" | "id" | "name">;
  postMedia: { url: string }[];
}
