import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  LikesTweet,
  LoadingPage,
  QuestionTweet,
  ReplyTweet,
  ViewHeader,
} from "../../components";
import { tweetsService } from "../../services/tweetService";
import { userProfileService } from "../../services/userService";

type LikesTweetProps = {
  user_id: number;
  username: string;
  created_at: string;
  email: string;
  question: string;
  answer: string;
  id: string;
  image?: string;
};

type ReplyProps = {
  username: string;
  userId: number;
  created_at: string;
  email: string;
  reply: string;
};

type TweetProps = {
  id: number;
  question: string;
  answer: string;
  username: string;
  email: string;
  created_at: string;
  user_id: number;
  likes: number;
  likesArr: [];
  isLike: boolean;
};

type UserProps = {
  username: string;
  email: string;
  tweets: TweetProps[];
};

const Profil: React.FC = () => {
  const { userId } = useParams();
  const [dataUser, setDataUser] = useState<UserProps>();
  const [tweetUser, setTweetUser] = useState<TweetProps[]>();
  const [dataUserReplies, setDataUserReplies] = useState<ReplyProps[]>();
  const [dataUserLikes, setDataUserLikes] = useState<LikesTweetProps[]>([]);
  // const dataUser = JSON.parse(localStorage.getItem("data_user") || "");
  const [active, setACtive] = useState("Tweets");
  const navigate = useNavigate();
  const [isDelay, setIsDelay] = useState(true);

  const buttons = [
    {
      id: 1,
      name: "Tweets",
    },
    {
      id: 2,
      name: "Reply",
    },
    {
      id: 3,
      name: "Likes",
    },
  ];

  async function getUserReplies(userId: string) {
    try {
      const response = await tweetsService.get(`/getmyreplies/${userId}`);
      if (response.data.status === 200) {
        setDataUserReplies(response.data.data);
      }
    } catch (e) {
      toast.error("Cannot get replies");
    }
  }

  async function getUserLikes(id: string) {
    try {
      const response = await tweetsService.get(`/likes/${id}`);
      if (response.data.status === 200) {
        setDataUserLikes(response.data.data);
      }
    } catch (e) {
      toast.error("Cannot get user liked tweet");
    }
  }

  async function getButton(
    e: React.MouseEvent<HTMLElement>,
    nameButton: string
  ) {
    e.preventDefault();
    switch (nameButton) {
      case "Tweets":
        setACtive(nameButton);
        break;
      case "Reply":
        setACtive(nameButton);
        getUserReplies(userId || "");
        break;
      case "Likes":
        setACtive(nameButton);
        getUserLikes(userId || "");
        break;
      default:
        break;
    }
  }

  async function getUserData(id: number) {
    setIsDelay(true);
    try {
      const response = await userProfileService.get(`/${id}`);
      if (response.data.status === 200) {
        setIsDelay(false);
        setDataUser(response.data.data);
        setTweetUser(response.data.data.tweets);
      }
    } catch (e) {
      toast.error(e);
    }
  }

  useEffect(() => {
    getUserData(Number(userId));
  }, [userId]);

  return (
    <>
      {!isDelay ? (
        <>
          <ViewHeader title={dataUser?.username || ""} isBorder={true} />
          <div className="bg-red-500 h-[270px]"></div>
          <div className="bg-opacity-30 px-5 -mt-20 flex justify-between">
            <div className="bg-gray-300 w-[134px] h-[134px] rounded-full" />
            <button className="place-self-end rounded-full border-2 border-blue-500 px-10 py-2 font-semibold hover:bg-blue-500 hover:text-white transition">
              Follow
            </button>
          </div>
          <div className="border-b-2 border-gray-200 px-8 py-2 pb-10">
            <h5 className="font-semibold text-xl">{dataUser?.username}</h5>
            <p className="text-gray-500">{dataUser?.email}</p>
          </div>
          {/* buttons */}
          <div className="grid grid-cols-12">
            {buttons.map((item, index) => (
              <button
                key={index}
                className={`${
                  active === item.name
                    ? "border-b-2 border-blue-500"
                    : "border-white"
                } col-span-4 py-2 border-b-2`}
                onClick={(e) => getButton(e, item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* content */}
          {active === "Tweets" &&
            tweetUser?.map((item, index) => (
              <div className="p-5 flex flex-col gap-3">
                <QuestionTweet
                  key={index}
                  id={Number(item.id)}
                  userId={Number(userId)}
                  question={item.question}
                  answer={item.answer}
                  username={dataUser?.username || ""}
                  email={dataUser?.email || ""}
                  created_at={item.created_at}
                  navigate={navigate}
                  likes={item.likes}
                  likesArr={item.likesArr}
                  isLike={item.isLike || false}
                  cardType="Profile"
                  setTweetUser={setTweetUser}
                />
              </div>
            ))}
          {active === "Reply" &&
            dataUserReplies?.map((item, index) => (
              <ReplyTweet
                key={index}
                userId={Number(userId)}
                username={item?.username}
                email={item?.email}
                created_at={item.created_at}
                reply={item.reply}
              />
            ))}
          {active === "Likes" &&
            dataUserLikes.map((item) => (
              <LikesTweet
                userId={item.user_id}
                username={item.username}
                email={item.email}
                created_at={item.created_at}
                question={item.question}
                answer={item.answer}
                id={item.id}
              />
            ))}
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Profil;
