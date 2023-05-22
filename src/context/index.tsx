import { TweetProvider } from "./TweetContext";

type ContextProps = {
  children: JSX.Element;
};

const Context = ({ children }: ContextProps) => {
  return (
    <>
      <TweetProvider>{children}</TweetProvider>
    </>
  );
};

export default Context;
