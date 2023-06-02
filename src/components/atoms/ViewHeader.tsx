import React from "react";

type HeaderType = {
  title: string;
  isBorder: boolean;
};

const ViewHeader: React.FC<HeaderType> = ({ title, isBorder }) => {
  return (
    <>
      <div
        className={`bg-white ${
          isBorder ? "border-b-2 border-gray-200 sticky top-0" : ""
        } px-5 py-3`}
      >
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
    </>
  );
};

export default ViewHeader;
