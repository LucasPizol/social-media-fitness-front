import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { useMemo } from "react";

const { Header, Content, Footer, Sider } = Layout;

export const PageLayout = ({ children }: { children: JSX.Element }) => {
  const items = useMemo((): MenuItemType[] => {
    return [
      {
        key: "home",
        icon: <HomeOutlined />,
        label: "Início",
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
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};
