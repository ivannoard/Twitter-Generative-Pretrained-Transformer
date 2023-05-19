import { useParams } from "react-router-dom";
import { TweetDetail, ViewHeader } from "../../components";
import { questionDummyTweets } from "../../models/tweets";

type TweetId = {
  id: string;
};

const DetailTweet = () => {
  const { id } = useParams<TweetId>();
  const detailTweet = questionDummyTweets.filter(
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
