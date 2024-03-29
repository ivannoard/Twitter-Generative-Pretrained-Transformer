import { Beranda, DetailTweet, Markah, Pesan, Profil } from "../pages/views";

const routes = [
  {
    name: "Homepage",
    path: "/beranda",
    view: <Beranda />,
  },
  {
    name: "Profil",
    path: "/profil/:userId",
    view: <Profil />,
  },
  {
    name: "Detail Tweet",
    path: "/detail/:id",
    view: <DetailTweet />,
  },
  {
    name: "Markah Tweet",
    path: "/markah",
    view: <Markah />,
  },
  {
    name: "Pesan Tweet",
    path: "/pesan/:id",
    view: <Pesan />,
  },
];

export default routes;
