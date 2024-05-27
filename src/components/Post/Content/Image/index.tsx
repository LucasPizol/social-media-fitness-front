import { Image } from "antd";
import { useState } from "react";
import { ContentImageModal } from "./Modal";

export interface PostContentImageProps {
  url: string;
}

export const PostContentImage = ({ url }: PostContentImageProps) => {
  const [open, setOpen] = useState<boolean>(false);

  if (open)
    return <ContentImageModal url={url} open={open} setOpen={setOpen} />;

  return (
    <Image
      src={url}
      onClick={() => setOpen(true)}
      preview={false}
      style={{
        cursor: "pointer",
        aspectRatio: "1/1",
        objectFit: "contain",
        flex: 1,
        background: "#36373a",
      }}
    />
  );
};
