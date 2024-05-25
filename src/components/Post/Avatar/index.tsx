import { Image } from "antd";
import { HiUserCircle } from "react-icons/hi";

export interface AvatarProps {
  url: string | null;
}

export const Avatar = ({ url }: AvatarProps) => {
  if (url) return <Image src={url} width={30} height={30} />;

  return <HiUserCircle size={30} />;
};
