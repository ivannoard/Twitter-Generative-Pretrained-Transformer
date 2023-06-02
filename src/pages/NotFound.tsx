import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <div>
          <p className="text-4xl font-semibold">404</p>
          <h1 className="text-3xl font-semibold">
            What You Will Find Is Voidness!
          </h1>
          <div
            className="flex mt-2 items-center gap-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
            <p className="underline">Back to realm.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
