import { useNavigate } from "react-router-dom";
import { QuestionTweet, ViewHeader } from "../../components";
import { questionDummyTweets } from "../../models/tweets";

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <>
      <ViewHeader title="Beranda" isBorder={true} />
      <div className="ask-gpt px-5 pb-5 mt-5">
        <form>
          <textarea
            name="ask-gpt"
            className="w-full border p-4"
            placeholder="Tanya GPT"
          ></textarea>
          <button className="bg-blue-500 px-5 py-2 rounded-full mt-3 w-full text-white font-semibold">
            Tanya Sekarang
          </button>
        </form>
      </div>
      <hr />
      <div className="px-5 mt-5 flex flex-col gap-5">
        {questionDummyTweets.map((item) => (
          <QuestionTweet
            navigate={navigate}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </>
  );
};

export default Beranda;
