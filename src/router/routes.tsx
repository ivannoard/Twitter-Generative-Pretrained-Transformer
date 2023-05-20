import React, { Suspense } from "react";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const routes = [
  {
    name: "Homepage",
    authorized: true,
    element: <Home />,
    path: "/beranda",
  },
  {
    name: "Profil",
    authorized: true,
    element: <Home />,
    path: "/profil",
  },
  {
    name: "Detail Tweet",
    authorized: true,
    element: <Home />,
    path: "/detail/:id",
  },
  {
    name: "Not Found",
    element: <NotFound />,
    path: "*",
  },
];

export default routes;
