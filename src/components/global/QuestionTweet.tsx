import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCircleFill, BsSave } from "react-icons/bs";
import { NavLink, NavigateFunction } from "react-router-dom";
import { parseStringToDate } from "../../utils/helpers";
import { Tooltip } from "react-tooltip";
import { toast } from "react-hot-toast";
import { tweetsService } from "../../services/tweetService";

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
  isLike?: boolean;
};

type QuestionProps = {
  id: number;
  userId: number;
  navigate?: NavigateFunction;
  setMyTweets?: React.Dispatch<React.SetStateAction<TweetProps[]>>;
  setPeopleTweets?: React.Dispatch<React.SetStateAction<TweetProps[]>>;
  setDetailTweet?: React.Dispatch<React.SetStateAction<TweetProps[]>>;
  setTweetUser?: React.Dispatch<React.SetStateAction<TweetProps[]>>;
  question: string;
  answer: string;
  username: string;
  email: string;
  created_at: string;
  likes: number;
  likesArr: [];
  isLike: boolean;
  cardType?: string;
};

const QuestionTweet = ({
  id,
  userId,
  question,
  answer,
  username,
  email,
  created_at,
  likes,
  likesArr,
  isLike,
  cardType,
  navigate,
  setMyTweets,
  setPeopleTweets,
  setDetailTweet,
  setTweetUser,
}: QuestionProps) => {
  const token = JSON.parse(localStorage.getItem("data_user") || "{}");
  const [numberBool, setNumberBool] = useState<boolean>(false);

  async function handleLikeTweet(
    e: React.MouseEvent<HTMLElement>,
    tweetId: number
  ) {
    e.preventDefault();
    try {
      const response = await tweetsService.post("/likes", {
        user_id: token.id,
        tweet_id: tweetId,
      });
      if (response.data.status === 200) {
        if (cardType === "You") {
          setMyTweets &&
            setMyTweets((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? { ...item, isLike: true, likes: Number(item.likes + 1) }
                  : item
              )
            );
        } else if (cardType === "People") {
          setPeopleTweets &&
            setPeopleTweets((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? { ...item, isLike: true, likes: Number(item.likes + 1) }
                  : item
              )
            );
        } else if (cardType === "Detail") {
          setDetailTweet &&
            setDetailTweet((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? { ...item, isLike: true, likes: Number(item.likes + 1) }
                  : item
              )
            );
        } else if (cardType === "Profile") {
          setTweetUser &&
            setTweetUser((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? { ...item, isLike: true, likes: Number(item.likes + 1) }
                  : item
              )
            );
        }
        toast.success(response.data.message);
      }
    } catch (e) {
      toast.error("Failed liking this tweet!");
    }
  }

  async function handleDislikeTweet(
    e: React.MouseEvent<HTMLElement>,
    tweetId: number
  ) {
    e.preventDefault();
    try {
      const response = await tweetsService.post("/dislikes", {
        user_id: token.id,
        tweet_id: tweetId,
      });
      if (response.data.status === 200) {
        if (cardType === "You") {
          setMyTweets &&
            setMyTweets((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? {
                      ...item,
                      isLike: false,
                      likes: Number(item.likes - 1),
                      likesArr: item.likesArr.filter(
                        (likes) => likes !== token.id
                      ),
                    }
                  : item
              )
            );
        } else if (cardType === "People") {
          setPeopleTweets &&
            setPeopleTweets((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? {
                      ...item,
                      isLike: false,
                      likes: Number(item.likes - 1),
                      likesArr: item.likesArr.filter(
                        (likes) => likes !== token.id
                      ),
                    }
                  : item
              )
            );
        } else if (cardType === "Detail") {
          setDetailTweet &&
            setDetailTweet((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? {
                      ...item,
                      isLike: false,
                      likes: Number(item.likes - 1),
                      likesArr: item.likesArr.filter(
                        (likes) => likes !== token.id
                      ),
                    }
                  : item
              )
            );
        } else if (cardType === "Profile") {
          setTweetUser &&
            setTweetUser((prevState) =>
              prevState.map((item) =>
                item.id === tweetId
                  ? {
                      ...item,
                      isLike: false,
                      likes: Number(item.likes - 1),
                      likesArr: item.likesArr.filter(
                        (likes) => likes !== token.id
                      ),
                    }
                  : item
              )
            );
        }
        toast.success(response.data.message);
      }
    } catch (e) {
      toast.error("Failed dislike this tweet!");
    }
  }

  useEffect(() => {
    setNumberBool(likesArr?.length > 0 && likesArr?.includes(Number(token.id)));
  }, [likesArr, token.id]);

  return (
    <>
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
          <div className="w-9/12 p-2 flex items-center gap-8">
            <div className="flex items-center gap-2">
              {(isLike && likes > 0) || numberBool ? (
                <AiFillHeart
                  fill="red"
                  size={23}
                  className="cursor-pointer"
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleDislikeTweet(e, id)
                  }
                />
              ) : (
                <AiOutlineHeart
                  size={23}
                  className="cursor-pointer"
                  data-tooltip-id="like-tooltip"
                  data-tooltip-content="Like this tweet"
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleLikeTweet(e, id)
                  }
                />
              )}
              <p>{likes !== 0 && likes}</p>
              <Tooltip id="like-tooltip" />
            </div>
            <BsSave
              size={20}
              className="cursor-pointer"
              data-tooltip-id="mark-tooltip"
              data-tooltip-content="Mark this tweet"
            />
            <Tooltip id="mark-tooltip" />
          </div>
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
    </>
  );
};

export default QuestionTweet;
