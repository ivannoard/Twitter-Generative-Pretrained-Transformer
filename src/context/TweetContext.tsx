import { createContext, useReducer } from "react";
import { TweetType } from "../utils/types";

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
        data: uniqueConcat,
      };
    }
    case "ADD": {
      const concatTweets = [
        {
          id: action.payload.id,
          question: action.payload.question,
          answer: action.payload.answer,
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
