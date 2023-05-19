import React from "react";
import { Logo, Menus } from "..";

const HomeLeft: React.FC = () => {
  return (
    <>
      <div className="left col-span-3 w-full relative">
        <div className="fixed w-3/12 top-0 min-h-screen p-5">
          <Logo />
          <Menus />
        </div>
      </div>
    </>
  );
};

export default HomeLeft;
