import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Login, Register, Redirect, Home, NotFound } from "../pages";
import { LoadingState } from "../components";
import routes from "./routes";

const CantGoBack = () => {
  const auth = localStorage.getItem("data_user");
  return auth ? <Navigate to="/beranda" /> : <Outlet />;
};

const PrivateRoute = () => {
  const auth = localStorage.getItem("data_user");
  return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingState />}>
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<CantGoBack />}>
            <Route path={"/auth/login"} element={<Login />} />
            <Route path={"/auth/register"} element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<Home />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
