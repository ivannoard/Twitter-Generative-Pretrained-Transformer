import React from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

type HeaderType = {
  title: string;
  isBorder: boolean;
};

const ViewHeader: React.FC<HeaderType> = ({ title, isBorder }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`bg-white flex items-center gap-1 ${
          isBorder ? "border-b-2 border-gray-200 sticky top-0" : ""
        } px-5 py-3`}
      >
        {pathname !== "/beranda" && (
          <HiChevronDoubleLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer"
            size={18}
          />
        )}
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
      </div>
    </>
  );
};

export default ViewHeader;
