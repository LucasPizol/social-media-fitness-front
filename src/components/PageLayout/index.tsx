import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

export const PageLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const items = useMemo((): MenuItemType[] => {
    return [
      {
        key: "/inicio",
        icon: <HomeOutlined />,
        label: "Início",
      },
      {
        key: "/perfil",
        icon: <UserOutlined />,
        label: "Perfil",
      },
    ];
  }, []);

  return (
    <Layout>
      <Sider
        style={{
          height: "100vh",
          background: "#fff",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location]}
          items={items.map((item) => ({
            ...item,
            onClick: () => navigate(item.key.toString()),
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};
