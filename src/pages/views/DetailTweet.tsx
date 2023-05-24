import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TweetDetail, ViewHeader } from "../../components";
import { questionDummyTweets } from "../../models/tweets";
import { TweetContext } from "../../context/TweetContext";

type TweetId = {
  id: string;
};

const DetailTweet = () => {
  const { state } = useContext(TweetContext);
  const { id } = useParams<TweetId>();
  const detailTweet = state.data?.filter(
    (item) => item.id === parseInt(id || "")
  )[0];
  return (
    <>
      <ViewHeader title="Detail" isBorder={true} />
      <div className="p-5">
        <TweetDetail
          question={detailTweet?.question}
          answer={detailTweet?.answer}
        />
      </div>
    </>
  );
};

export default DetailTweet;
