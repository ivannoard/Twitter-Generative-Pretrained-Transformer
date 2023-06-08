import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { parseStringToDate } from "../../utils/helpers";
import { BsFillCircleFill } from "react-icons/bs";

type MarkTweetProps = {
  userId: number;
  username: string;
  created_at: string;
  email: string;
  question: string;
  answer: string;
  id: string;
  image?: string;
};

const MarkTweet = ({
  userId,
  username,
  created_at,
  email,
  question,
  answer,
  id,
}: MarkTweetProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-5">
        <div className="bg-white border p-3 rounded-md">
          <div className="top">
            <div className="mb-3">
              <div className="flex gap-2">
                <div className="bg-gray-500 w-[45px] h-[45px] rounded-full"></div>
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
            <p className="font-semibold mb-2 mt-1">{question}</p>
            <p className="mt-3">{answer}</p>
          </div>
          <div className="bottom mt-2 flex justify-between items-center">
            <div className="w-9/12 p-2 flex items-center gap-8"></div>
            <div className="w-3/12 p-2">
              {navigate && (
                <button
                  className="block w-full border transition font-semibold hover:bg-blue-500 hover:text-white border-blue-500 rounded-full text-blue-500 px-5 py-2"
                  onClick={() => navigate(`/detail/${id}`)}
                >
                  More Detail
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkTweet;
