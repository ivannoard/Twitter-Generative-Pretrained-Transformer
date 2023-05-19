import React, { Suspense } from "react";

const Redirect = React.lazy(() => import("../pages/Redirect"));
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const routes = [
  {
    name: "Redirect",
    element: (
      <Suspense>
        <Redirect />
      </Suspense>
    ),
    path: "/",
  },
  {
    name: "Homepage",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    path: "/beranda",
  },
  {
    name: "Profil",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    path: "/profil",
  },
  {
    name: "Detail Tweet",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    path: "/detail/:id",
  },
  {
    name: "Login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
    path: "/auth/login",
  },
  {
    name: "Register",
    element: (
      <Suspense>
        <Register />
      </Suspense>
    ),
    path: "/auth/register",
  },
  {
    name: "Not Found",
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
    path: "*",
  },
];

export default routes;
