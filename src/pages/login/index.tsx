import sessionManagement from "@/api/session-management";
import { LoginForm } from "@/components/Login/Form";
import { Col, Form, Row } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const credentials = sessionManagement.getCredentials();

    if (credentials) {
      form.setFieldValue("rememberMe", true);
      form.setFieldValue("email", credentials.email);
      form.setFieldValue("password", credentials.password);
    }
  }, []);

  return (
    <Row
      style={{ width: "100%", height: "100vh" }}
      align="middle"
      justify="center"
    >
      <Col span={24} style={{ maxWidth: 400 }}>
        <LoginForm form={form} />

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
            to={"/register"}
          >
            Não tem cadastro? Registre-se já!
          </Link>
        </Col>
      </Col>
    </Row>
  );
};
