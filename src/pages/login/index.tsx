import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Typography,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sessionManagement from "../../api/session-management";
import { useAuthContext } from "../../context/auth/auth-context";

export const Login = () => {
  const [form] = Form.useForm();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { signIn, isLoading} = useAuthContext();

  useEffect(() => {
    const credentials = sessionManagement.getCredentials();

    if (credentials) {
      setRememberMe(true);
      form.setFieldValue("email", credentials.email);
      form.setFieldValue("password", credentials.password);
    }
  }, []);

  const handleSubmit = async () => {
    const [email, password] = [
      form.getFieldValue("email"),
      form.getFieldValue("password"),
    ];

    try {
      await signIn({ email, password });

      if (rememberMe) {
        sessionManagement.setCredentials({
          email,
          password,
        });
      }
    } catch (error) {
      messageApi.error("Usuário ou senha incorretos");
    }
  };

  return (
    <Row
      style={{ width: "100%", height: "100vh" }}
      align="middle"
      justify="center"
    >
      {contextHolder}
      <Col span={24} style={{ maxWidth: 400 }}>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          initialValues={{ rememberMe: false }}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 0,
          }}
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[{ required: true, message: "Insira seu e-mail!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Senha"
            rules={[
              { required: true, message: "Insira sua senha!" },
              {
                min: 6,
                message: "Sua senha deve ter pelo menos 6 digitos!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Row style={{ width: "100%" }} justify="space-between" align="middle">
            <Col>
              <Checkbox
                name="rememberMe"
                onChange={() => setRememberMe(!rememberMe)}
                checked={rememberMe}
              />
              <Typography.Text style={{ marginLeft: 2 }}>
                Lembrar-me
              </Typography.Text>
            </Col>
            <Link to="/forgot-password" style={{ margin: 0, padding: 0 }}>
              Esqueci minha senha
            </Link>
          </Row>
          <Button
            onClick={form.submit}
            type="primary"
            loading={isLoading}
            style={{
              marginTop: 18,
            }}
          >
            Acessar
          </Button>
        </Form>

        <Col span={24} style={{
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          marginTop: 12,

        }}>
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
