import { Beranda, DetailTweet, Profil } from "../pages/views";

const routes = [
  {
    name: "Homepage",
    path: "/beranda",
    view: <Beranda />,
  },
  {
    name: "Profil",
    path: "/profil",
    view: <Profil />,
  },
  {
    name: "Detail Tweet",
    path: "/detail/:id",
    view: <DetailTweet />,
  },
];

export default routes;
