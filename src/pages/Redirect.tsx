import React from "react";
import { useNavigate } from "react-router-dom";

const Redirect: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative h-screen bg-blue-100 transition-all">
        <div className="flex w-full h-full items-center justify-center">
          <div>
            <h4 className="text-3xl font-semibold">
              Selamat Datang di Twitter GPT
            </h4>
            <p className="text-center">powered by chat gpt</p>
            <button
              className="mx-auto block px-5 py-2 rounded-md bg-white mt-4"
              onClick={() => navigate("/beranda")}
            >
              Tutup Headline
            </button>
          </div>
        </div>
        <p className="absolute bottom-3 left-0 right-0 text-center">
          proyek iseng by @ini._.ivan wkwk
        </p>
      </div>
    </>
  );
};

export default Redirect;
