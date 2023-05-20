import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeLayout } from "../components";
import { Beranda, DetailTweet, Profil } from "./views";

const Home: React.FC = () => {
  const [view, setView] = React.useState<JSX.Element>(<Beranda />);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (pathname.split("/")[1]) {
      case "beranda":
        setView(<Beranda />);
        break;
      case "profil":
        setView(<Profil />);
        break;
      case "detail":
        setView(<DetailTweet />);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <>
      <HomeLayout>{view}</HomeLayout>
    </>
  );
};

export default Home;
