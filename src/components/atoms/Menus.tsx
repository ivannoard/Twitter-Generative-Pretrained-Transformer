import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import navMenu from "../../utils/menus";
import { BsThreeDots } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import { FiLogOut, FiSettings } from "react-icons/fi";

const Menus: React.FC = () => {
  const navigate = useNavigate();
  function handleLogout(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    localStorage.removeItem("data_user");
    navigate("/");
  }
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
                <p>{item.name}</p>
              </NavLink>
            </div>
          ))}
          <Menu>
            <div className="relative">
              <Menu.Button>
                <div className="flex items-center">
                  <div className="flex items-center gap-2 px-5 py-2 rounded-full sidebar-nav">
                    <BsThreeDots size={22} className="text-gray-500" />
                    Lainnya
                  </div>
                </div>
              </Menu.Button>
              <Menu.Items
                className={
                  "p-3 border-2 rounded-lg flex flex-col gap-3 bg-white w-9/12 absolute bottom-6 right-0"
                }
              >
                <Menu.Item>
                  <div className="hover:bg-gray-200 px-3 py-2 cursor-pointer  flex items-center gap-2">
                    <FiSettings />
                    <p className="mb-1">Pengaturan</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div
                    className="hover:bg-gray-200 px-3 py-2 cursor-pointer flex items-center gap-2"
                    onClick={(e) => handleLogout(e)}
                  >
                    <FiLogOut />
                    <p className="mb-1">Logout</p>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </div>
          </Menu>
          <div className="cursor-pointer flex items-center"></div>
        </div>
        <button className="bg-blue-500 py-2 mt-10 text-white rounded-full w-full">
          Tweet
        </button>
      </div>
    </>
  );
};

export default Menus;
