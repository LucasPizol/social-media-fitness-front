import { Col, Spin } from "antd";
import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { useAuthContext } from "./context/auth/auth-context";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";

export const RoutesApp = () => {
  const { isPageLoading, user } = useAuthContext();

  if (isPageLoading) {
    return (
      <Col
        span={24}
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </Col>
    );
  }

  const routes = useMemo(() => {
    if (user)
      return (
        <PageLayout>
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<Navigate to={"/profile"} />}></Route>
          </Routes>
        </PageLayout>
      );

    return (
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Navigate to={"/login"} />}></Route>
      </Routes>
    );
  }, [user]);

  return routes;
};
