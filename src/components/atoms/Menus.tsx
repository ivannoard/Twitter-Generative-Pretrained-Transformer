import React from "react";
import { navMenu } from "../../utils/menus";
import { useNavigate } from "react-router-dom";

const Menus: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-8 flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          {navMenu.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <span className="hover:bg-gray-200 px-5 py-2 rounded-full">
                {item.name}
              </span>
            </p>
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
