import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsX } from "react-icons/bs";
import { tweetsService } from "../../services/tweetService";

type ReplyProps = {
  id?: string;
  username?: string;
  email?: string;
  created_at?: string;
  user_id: string;
  reply: string;
};

type ModalProps = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTweetReply: React.Dispatch<React.SetStateAction<ReplyProps>>;
  userId: number;
  tweetId: number;
};

const ModalTweet = ({
  setIsOpenModal,
  setTweetReply,
  userId,
  tweetId,
}: ModalProps) => {
  const [fields, setFields] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    e.preventDefault();
    setFields(e.target.value);
  }

  async function postReply(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await tweetsService.post("/reply", {
        reply: fields,
        user_id: userId,
        tweet_id: tweetId,
      });
      if (response.data.status === 200) {
        console.log(response);
        toast.success("Success reply this tweet");
        setTweetReply(response.data.data);
        setIsOpenModal(false);
      }
    } catch (e) {
      console.log(e);
      toast.error("Cannot reply this tweet now");
    }
  }
  return (
    <>
      <div className="fixed w-full min-h-screen bg-opacity-40 top-0 left-0 bg-black" />
      <div className="fixed w-1/2 mx-auto left-0 right-0 z-10">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex justify-between items-center">
            <h5 className="text-lg">Balas tweet ini</h5>
            <BsX
              size={28}
              onClick={() => setIsOpenModal(false)}
              className="cursor-pointer"
            />
          </div>
          {/* input area */}
          <form onSubmit={(e) => postReply(e)}>
            <textarea
              name="question"
              onChange={(e) => handleChange(e)}
              className="w-full border p-4 min-h-[100px] mt-3 rounded-e-sm"
              //   placeholder="Tanya GPT"
              style={{ resize: "none" }}
            ></textarea>
            <div className="grid grid-cols-12">
              <div className="col-span-8">{/* under development */}</div>
              <div className="col-span-4 flex mt-3">
                <button className="py-1 px-10 ml-auto rounded-full bg-blue-500 text-white font-semibold">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalTweet;
