import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingPage, QuestionTweet, ViewHeader } from "../../components";
import { TweetContext } from "../../context/TweetContext";
import { tweetsService } from "../../services/tweetService";
// import { questionDummyTweets } from "../../models/tweets";

type TweetProps = {
  id: number;
  question: string;
  answer: string;
  username: string;
  email: string;
  created_at: string;
  user_id: number;
};

const Beranda = () => {
  const token = JSON.parse(localStorage.getItem("data_user") || "{}");
  const [myTweets, setMyTweets] = useState<TweetProps[]>([]);
  const [peopleTweets, setPeopleTweets] = useState<TweetProps[]>([]);
  const [fields, setFields] = useState("");
  const [active, setActive] = useState("People");
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(TweetContext);
  const navigate = useNavigate();
  const menusButton = [
    {
      id: 1,
      name: "People",
    },
    {
      id: 2,
      name: "You",
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setIsDisable(false);
    setFields(e.target.value);
  }

  async function getPeopleTweets() {
    setIsLoading(true);
    await tweetsService.get("/tweets").then((response) => {
      setIsLoading(false);
      setPeopleTweets(response.data.data);
    });
  }

  // post tweet
  async function handleTweet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await tweetsService.post(
        "/tweets",
        {
          question: fields,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      if (response.data.status === 200) {
        setIsLoading(false);
        getPeopleTweets();
        const data = {
          id: response.data.data.id,
          question: response.data.data.question,
          answer: response.data.data.answer,
        };
        setMyTweets([response.data.data, ...myTweets]);
        dispatch({
          type: "ADD",
          payload: data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  // get tweets from button
  async function getTweets(e: React.MouseEvent<HTMLElement>, button: string) {
    e.preventDefault();
    setActive(button);
    if (button === "People") {
      try {
        const response = await tweetsService.get("/tweets");
        if (response.data.status === 200) {
          setPeopleTweets(response.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  // guard button
  useEffect(() => {
    if (fields.length === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [fields.length]);

  // init my tweets
  useEffect(() => {
    const getMyTweets = async () => {
      setIsLoading(true);
      await tweetsService
        .get("/mytweets", {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        })
        .then((response) => {
          setIsLoading(false);
          setMyTweets(response.data.data);
          dispatch({ type: "INIT", payload: response.data.data });
        });
    };

    getMyTweets();
    getPeopleTweets();
  }, [token.token, dispatch]);

  return (
    <>
      <ViewHeader title="Beranda" isBorder={true} />
      <div className="ask-gpt px-5 pb-5 mt-5">
        <form onSubmit={handleTweet}>
          <textarea
            name="question"
            onChange={handleChange}
            className="w-full border p-4 max-h-[100px]"
            placeholder="Tanya GPT"
            style={{ resize: "none" }}
          ></textarea>
          <button
            type="submit"
            className={`${
              isDisable ? "bg-blue-300" : "bg-blue-500"
            } px-5 py-2 rounded-full mt-4 w-full text-white font-semibold`}
          >
            Tanya Sekarang
          </button>
        </form>
      </div>
      <hr />

      <div className="grid grid-cols-12">
        {menusButton.map((item) => (
          <div
            key={item.id}
            className={`col-span-6 px-5 py-2 text-center border-b-2 cursor-pointer ${
              active === item.name ? "border-blue-500" : "border-none"
            }`}
            onClick={(e) => getTweets(e, item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <hr />
      {active === "You" && !isLoading ? (
        <div className="px-5 mt-5 flex flex-col gap-5">
          {myTweets?.reverse().map((item, index) => (
            <QuestionTweet
              key={index}
              navigate={navigate}
              id={item.id}
              userId={item.user_id}
              question={item.question}
              answer={item.answer}
              username={item.username}
              email={item.email}
              created_at={item.created_at}
            />
          ))}
        </div>
      ) : active === "People" && !isLoading ? (
        <div className="px-5 mt-5 flex flex-col gap-5">
          {peopleTweets?.map((item, index) => (
            <QuestionTweet
              key={index}
              navigate={navigate}
              id={item.id}
              userId={item.user_id}
              question={item.question}
              answer={item.answer}
              username={item.username}
              email={item.email}
              created_at={item.created_at}
            />
          ))}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default Beranda;
