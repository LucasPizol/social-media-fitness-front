import { PostTextArea } from "@/components/Fields/PostTextArea";
import { FileImageOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Form, Image, Row, Upload } from "antd";
import { usePostFormModel } from "./model";

export const PostFormView = ({
  form,
  contextHolder,
  handleSubmit,
  loading,
  previewFiles,
  setPreviewFiles,
  handleChangeFile,
}: ReturnType<typeof usePostFormModel>) => {
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        border: `1px solid #e4e4e4`,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      {contextHolder}
      <PostTextArea />{" "}
      <Row
        justify="end"
        style={{
          width: "100%",
          margin: 8,
          gap: 8,
        }}
      >
        {previewFiles.map((value, index) => (
          <Image
            key={index}
            src={value}
            width={60}
            height={60}
            style={{ objectFit: "contain", border: "1px solid #e4e4e4" }}
          />
        ))}
      </Row>
      <Row
        justify="end"
        style={{
          width: "100%",
          gap: 8,
        }}
      >
        <Upload
          style={{ height: "100%" }}
          accept=".png, .jpg, .webp, .bmp"
          onChange={handleChangeFile}
          beforeUpload={(file) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              if (e.target?.result)
                setPreviewFiles((files) => [
                  ...files,
                  String(e.target?.result),
                ]);
            };
            reader.readAsDataURL(file);

            return false;
          }}
          multiple
          key="uid"
          showUploadList={false}
        >
          <Button
            style={{
              border: "none",
            }}
          >
            <FileImageOutlined />
          </Button>
        </Upload>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          style={{
            border: "none",
            maxWidth: 150,
            width: "100%",
          }}
        >
          <SendOutlined />
        </Button>
      </Row>
    </Form>
  );
};
