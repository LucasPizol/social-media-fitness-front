import { Button, Col, Form, Input, Row, message } from "antd";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/auth/auth-context";

export const Register = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const { register, isLoading } = useAuthContext();

  const handleSubmit = async () => {
    const [email, password, confirmPassword, name] = [
      form.getFieldValue("email"),
      form.getFieldValue("password"),
      form.getFieldValue("confirmPassword"),
      form.getFieldValue("name"),
    ];

    if (password !== confirmPassword) {
      messageApi.error("As senhas não conferem");
      return;
    }

    try {
      await register({ email, password, name });
    } catch (error) {
      messageApi.error("Ocorreu um erro ao registrar o usuário");
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
            name="name"
            label="Nome Completo"
            rules={[{ required: true, message: "Insira seu nome completo!" }]}
          >
            <Input type="text" />
          </Form.Item>
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
              {
                validator(_, value, callback) {
                  const requiredSymbols = "[]*/()!@#$%&*()_+{}|:<>?";

                  for (const symbol of requiredSymbols) {
                    if (value.includes(symbol)) {
                      callback();
                      return;
                    }
                  }
                  callback(
                    "Sua senha deve conter pelo menos um caractere especial"
                  );
                },
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirme sua senha"
            rules={[
              { required: true, message: "Insira sua senha!" },
              {
                min: 6,
                message: "Sua senha deve ter pelo menos 6 digitos!",
              },
              {
                validator(_, value, callback) {
                  if (value !== form.getFieldValue("password")) {
                    callback("As senhas devem ser iguais!");
                  }
                  callback();
                },
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Button
            onClick={form.submit}
            type="primary"
            loading={isLoading}
            style={{
              marginTop: 18,
            }}
          >
            Cadastrar
          </Button>
        </Form>
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
