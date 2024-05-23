import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/auth/auth-provider";
import { RoutesApp } from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#269351",
          borderRadius: 4,
          colorBgContainer: "#f0f0f0",
        },
      }}
    >
      <AuthProvider>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
