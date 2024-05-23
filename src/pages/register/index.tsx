import { RegisterForm } from "@/components/Register/Form";
import { Col, Form, Row } from "antd";
import { Link } from "react-router-dom";

export const Register = () => {
  const [form] = Form.useForm();

  return (
    <Row
      style={{ width: "100%", height: "100vh" }}
      align="middle"
      justify="center"
    >
      <Col span={24} style={{ maxWidth: 400 }}>
        <RegisterForm form={form} />
        <Col
          span={24}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          <Link
            style={{
              textAlign: "center",
            }}
            to="/login"
          >
            Já tem cadastro? Acesse agora!
          </Link>
        </Col>
      </Col>
    </Row>
  );
};
