import { Outlet } from "react-router-dom";
import { SocialMedias } from "..";
import { socialmedias } from "../../utils/socialmedia";

// type AuthLayoutProps = {
//   children: JSX.Element;
// };

const AuthLayout = () => {
  return (
    <>
      <main>
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-8 flex items-center">
            <div className="px-10 mb-20">
              <h4 className="font-semibold text-3xl text-gray-700">
                Twitter Generative Pre-Trained Transformer
              </h4>
              <p className="mt-1 text-gray-500">Powered by ChatGPT</p>
              <p className="mt-5 text-gray-500">
                Meet The{" "}
                <span className="text-blue-500 font-semibold">Creator</span>
              </p>
              <div className="social-medias mt-2 flex flex-col gap-2">
                {socialmedias.map((item, index) => (
                  <SocialMedias
                    key={index}
                    name={item.name}
                    username={item.username}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-blue-500 px-5">{<Outlet />}</div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
