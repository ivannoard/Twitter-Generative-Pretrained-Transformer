import { createContext, useReducer, useEffect } from "react";
import { TweetType } from "../utils/types";
import { tweetsService } from "../services/tweetService";

type TweetProps = {
  children: JSX.Element;
};

export type TweetAction = {
  type: "INIT" | "ADD";
  payload: TweetType;
};

type initialStateType = {
  data: TweetType[];
};

const initialState = {
  data: [],
};

export const TweetContext = createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const TweetReducer = (state: initialStateType, action: TweetAction) => {
  switch (action.type) {
    case "INIT": {
      const concatTweets = state.data.concat(action.payload);
      const uniqueConcat = [
        ...new Map(concatTweets.map((tweet) => [tweet.id, tweet])).values(),
      ];
      return {
        ...state,
        data: uniqueConcat.map((item) => {
          return { ...item, isLike: false };
        }),
      };
    }
    case "ADD": {
      const concatTweets = [
        {
          id: action.payload.id,
          question: action.payload.question,
          answer: action.payload.answer,
          username: action.payload.username,
          email: action.payload.email,
          created_at: action.payload.created_at,
          user_id: action.payload.user_id,
          likes: action.payload.likes,
        },
        ...state.data,
      ];
      return {
        ...state,
        data: concatTweets,
      };
    }
    default:
      return state;
  }
};

export const TweetProvider = ({ children }: TweetProps) => {
  const [state, dispatch] = useReducer(TweetReducer, initialState);
  const token = JSON.parse(localStorage.getItem("data_user") || "{}");

  useEffect(() => {
    const getMyTweets = async () => {
      await tweetsService
        .get("/mytweets", {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        })
        .then((response) => {
          dispatch({ type: "INIT", payload: response.data.data });
        });
    };
    if (state.data.length === 0) getMyTweets();
  }, [state.data.length, token.token]);

  // const value = {
  //   tweets: state.tweets,
  //   addTweet: (tweet: TweetType) => {
  //     dispatch({ type: "ADD" as TweetConstant, payload: tweet });
  //   },
  // };

  return (
    <TweetContext.Provider value={{ state, dispatch }}>
      {children}
    </TweetContext.Provider>
  );
};
