import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionTweet, ViewHeader } from "../../components";
import { TweetContext } from "../../context/TweetContext";
// import { questionDummyTweets } from "../../models/tweets";

// type TweetProps = {
//   id: number;
//   question: string;
//   answer: string;
// };

const Beranda = () => {
  const { state, dispatch } = useContext(TweetContext);
  console.log(state);
  const navigate = useNavigate();
  // const [tweets, setTweets] = useState<TweetProps[]>([]);
  const [fields, setFields] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setFields(e.target.value);
  }

  function handleTweet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const data = {
      id,
      question: fields,
      answer: "This is robot answering :)",
    };
    dispatch({ type: "ADD", payload: data });
    // setTweets([...tweets, data]);
  }

  return (
    <>
      <ViewHeader title="Beranda" isBorder={true} />
      <div className="ask-gpt px-5 pb-5 mt-5">
        <form onSubmit={handleTweet}>
          <textarea
            name="ask-gpt"
            onChange={handleChange}
            className="w-full border p-4"
            placeholder="Tanya GPT"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 px-5 py-2 rounded-full mt-3 w-full text-white font-semibold"
          >
            Tanya Sekarang
          </button>
        </form>
      </div>
      <hr />
      <div className="px-5 mt-5 flex flex-col gap-5">
        {state.data?.map((item, index) => (
          <QuestionTweet
            key={index}
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
