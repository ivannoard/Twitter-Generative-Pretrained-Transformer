// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import { HomeLayout } from "../components";
// import routes from "../router/routes";
// import { Beranda } from "./views";

// const Home = () => {
//   const [view, setView] = useState<JSX.Element>(<Beranda />);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const getRoute = routes.filter(
//       (item) => item.path.split("/")[1] === pathname.split("/")[1]
//     )[0];
//     setView(getRoute.view);
//   }, [pathname]);

//   return <>{/* <HomeLayout>{view}</HomeLayout> */}</>;
// };

// export default Home;
