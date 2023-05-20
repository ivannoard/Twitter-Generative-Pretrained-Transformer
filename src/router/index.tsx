import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import routes from "./routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Redirect from "../pages/Redirect";
import { Suspense } from "react";
import { LoadingState } from "../components";

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
          <Route path={"/"} element={<Redirect />} />
          <Route element={<CantGoBack />}>
            <Route path={"/auth/login"} element={<Login />} />
            <Route path={"/auth/register"} element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                // authorized={route.authorized}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
