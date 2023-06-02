import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ModalTweet,
  QuestionTweet,
  ReplyTweet,
  ViewHeader,
} from "../../components";
import { tweetsService } from "../../services/tweetService";

type ReplyProps = {
  id?: string;
  username?: string;
  email?: string;
  created_at?: string;
  user_id: string;
  reply: string;
};

type TweetProps = {
  id?: number;
  question?: string;
  answer?: string;
  username?: string;
  email?: string;
  created_at?: string;
  user_id: string;
  replies: ReplyProps[];
};

const DetailTweet = () => {
  const { id } = useParams<string>();
  const [detailTweet, setDetailTweet] = useState<TweetProps[]>([]);
  const [tweetReplies, setTweetReplies] = useState<ReplyProps[]>([]);
  const [tweetReply, setTweetReply] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const detailTweet = state.data?.filter(
  //   (item) => item.id === parseInt(id || "")
  // )[0];

  async function getDetailTweet(id: number) {
    try {
      const response = await tweetsService.get(`/tweets/${id}`);
      if (response.data.status === 200) {
        setDetailTweet(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  console.log(tweetReply);
  console.log(tweetReplies);

  useEffect(() => {
    setTweetReplies(detailTweet[0]?.replies);
  }, [detailTweet]);

  useEffect(() => {
    if (Object.keys(tweetReply).length > 0) {
      setTweetReplies([tweetReply as ReplyProps, ...tweetReplies]);
      // tweetReplies.unshift(tweetReply as ReplyProps);
    }
  }, [tweetReply]);

  useEffect(() => {
    getDetailTweet(parseInt(id || ""));
  }, [id]);

  console.log(tweetReplies?.reverse());

  return (
    <>
      <ViewHeader title="Detail" isBorder={true} />
      {isOpenModal && (
        <ModalTweet
          setIsOpenModal={setIsOpenModal}
          userId={JSON.parse(localStorage.getItem("data_user") || "").id}
          tweetId={Number(id)}
          setTweetReply={setTweetReply}
        />
      )}
      <div className="p-5">
        {detailTweet.length > 0 && (
          <QuestionTweet
            id={Number(detailTweet[0]?.id)}
            userId={Number(detailTweet[0].user_id)}
            question={detailTweet[0]?.question || ""}
            answer={detailTweet[0]?.answer || ""}
            username={detailTweet[0]?.username || ""}
            email={detailTweet[0]?.email || ""}
            created_at={detailTweet[0]?.created_at || ""}
          />
        )}
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-8">{/* content for tweet button */}</div>
          <div className="col-span-4 flex items-end">
            <button
              onClick={() => setIsOpenModal(true)}
              className="py-1 px-10 ml-auto rounded-full bg-blue-500 text-white font-semibold"
            >
              Balas
            </button>
          </div>
        </div>
      </div>
      <hr />
      {tweetReplies?.map((item, index) => (
        <ReplyTweet
          key={index}
          username={item.username || ""}
          userId={Number(item.user_id)}
          email={item.email || ""}
          created_at={item.created_at || ""}
          reply={item.reply}
        />
      ))}
    </>
  );
};

export default DetailTweet;
