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
    <>
      <Sider
        style={{
          height: "100vh",
          background: "#252525",
          zIndex: 999,
          position: "fixed",
          width: 300,
        }}
      >
        <Menu
          style={{
            width: 300,
            height: "100vh",
            background: "transparent",
          }}
          theme="light"
          mode="inline"
          selectedKeys={[location]}
          items={items.map((item) => ({
            ...item,
            onClick: () => navigate(item.key.toString()),
          }))}
        />
      </Sider>
      <Layout
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          background: "#252525",
        }}
      >
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
      </Layout>
    </>
  );
};
