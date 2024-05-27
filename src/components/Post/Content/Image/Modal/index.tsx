import { Col, Image, Row } from "antd";

export interface ContentImageModalProps {
  url: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ContentImageModal = ({ url, setOpen }: ContentImageModalProps) => {
  return (
    <Row
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Col
        style={{
          maxWidth: 300,
          flex: 1,
          height: "100vh",
          background: "#363636",
        }}
      ></Col>
      <Col
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            background: "rgba(0, 0, 0, 0.98)",
            width: "100vw",
            height: "100vh",
          }}
        ></Col>
        <Image
          src={url}
          preview={false}
          onClick={() => false}
          style={{
            objectFit: "contain",
            maxHeight: "100vh",
            flex: 1,
            maxWidth: "90%",
            background: "#000000f8",
            zIndex: 99999,
          }}
        />
      </Col>
    </Row>
  );
};
