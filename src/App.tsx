import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./context/auth/auth-provider";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#222",
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
    </QueryClientProvider>
  );
}

export default App;
