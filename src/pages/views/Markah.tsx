import { useEffect, useState } from "react";
import { MarkTweet, ViewHeader } from "../../components";
import { toast } from "react-hot-toast";
import { tweetsService } from "../../services/tweetService";

type MarkTweetProps = {
  user_id: number;
  username: string;
  created_at: string;
  email: string;
  question: string;
  answer: string;
  id: string;
  image?: string;
};

const Markah = () => {
  const token = JSON.parse(localStorage.getItem("data_user") || "");
  const [marksData, setMarksData] = useState<MarkTweetProps[]>([]);

  async function getMyMarkData(userId: string) {
    try {
      const response = await tweetsService.get(`/mark/${userId}`);
      if (response.data.status === 200) {
        setMarksData(response.data.data);
      }
    } catch (e) {
      toast.error("Cannot get your mark data");
    }
  }

  useEffect(() => {
    getMyMarkData(token.id);
  }, [token.id]);

  return (
    <>
      <ViewHeader title="Markah" isBorder={true} />
      {marksData?.map((item) => (
        <MarkTweet
          userId={item.user_id}
          created_at={item.created_at}
          username={item.username}
          email={item.email}
          question={item.question}
          answer={item.answer}
          id={item.id}
          image={item.image}
        />
      ))}
    </>
  );
};

export default Markah;
