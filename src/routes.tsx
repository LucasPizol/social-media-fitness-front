import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { useAuthContext } from "./context/auth/auth-context";
import { Col, Spin } from "antd";

export const RoutesApp = () => {
  const { isLoading, user } = useAuthContext();

  if (isLoading) {
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

  return (
    <Routes>
      {user ? (
        <>
          <Route
            path="/profile"
            element={<p>Autenticado!</p>}
          ></Route>
          <Route path="/*" element={<Navigate to={"/profile"} />}></Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<Navigate to={"/login"} />}></Route>
        </>
      )}
    </Routes>
  );
};
