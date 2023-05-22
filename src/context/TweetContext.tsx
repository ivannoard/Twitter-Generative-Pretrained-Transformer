import { createContext, useReducer } from "react";

type TweetProps = {
  children: JSX.Element;
};

type TweetAction = {
  type: "ADD";
  payload: TweetType;
};

type TweetType = {
  id: number;
  question: string;
  answer: string;
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
    case "ADD": {
      const concatTweets = [
        ...state.data,
        {
          id: action.payload.id,
          question: action.payload.question,
          answer: action.payload.answer,
        },
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