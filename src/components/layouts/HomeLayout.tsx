import { Outlet } from "react-router-dom";
import { HomeLeft, HomeRight } from "..";

const Homelayout = () => {
  return (
    <>
      <main>
        <div className="grid grid-cols-12 mx-auto min-h-screen">
          {/* LEFT */}
          <HomeLeft />
          {/* MIDDLE */}
          <div className="middle col-span-6 border-l-2 border-r-2 border-gray-200 w-full">
            <Outlet />
          </div>
          {/* RIGHT */}
          <div className="right col-span-3 px-5">
            <HomeRight />
          </div>
        </div>
      </main>
    </>
  );
};

export default Homelayout;
