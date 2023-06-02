import React from "react";
import { NavLink } from "react-router-dom";
import navMenu from "../../utils/menus";

const Menus: React.FC = () => {
  return (
    <>
      <div className="mt-8 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {navMenu.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer flex items-center"
              // onClick={() => navigate(item.path)}
            >
              <NavLink
                to={item.path}
                className="flex items-center gap-2 px-5 py-2 rounded-full sidebar-nav"
              >
                {item.icon}
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 py-2 mt-10 text-white rounded-full w-full">
          Tweet
        </button>
      </div>
    </>
  );
};

export default Menus;
