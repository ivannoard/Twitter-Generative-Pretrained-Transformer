import { BsFillCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { parseStringToDate } from "../../utils/helpers";

type ReplyProps = {
  username: string;
  userId: number;
  created_at: string;
  email: string;
  reply: string;
};

const ReplyTweet = ({
  username,
  userId,
  created_at,
  email,
  reply,
}: ReplyProps) => {
  return (
    <>
      <div className="p-5">
        <div className="bg-white border p-3 rounded-md">
          <div className="top">
            <div className="mb-3">
              <div className="flex gap-2">
                <div className="bg-gray-500 w-[45px] h-[45px] rounded-full" />
                <div className="">
                  <div className="flex items-center gap-2">
                    <NavLink
                      to={`/profil/${userId}`}
                      className="hover:underline cursor-pointer"
                    >
                      {username}
                    </NavLink>
                    <BsFillCircleFill size={5} />
                    <p className="text-sm">{parseStringToDate(created_at)}</p>
                  </div>
                  <p className="text-sm text-gray-400">{email}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="pt-3">
              <p className="mt-1">{reply}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplyTweet;
