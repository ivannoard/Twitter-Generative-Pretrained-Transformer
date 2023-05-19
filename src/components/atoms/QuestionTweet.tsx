import { NavigateFunction } from "react-router-dom";

type QuestionProps = {
  id: number;
  navigate: NavigateFunction;
  question: string;
  answer: string;
};

const QuestionTweet = ({ id, question, answer, navigate }: QuestionProps) => {
  return (
    <>
      <div className="bg-white border p-2 rounded-sm">
        <div className="top">
          <p className="font-semibold mb-2">{question}</p>
          <hr />
          <p className="mt-3">{answer}</p>
        </div>
        <div className="bottom mt-2 flex justify-between items-center">
          <div className="w-9/12 p-2"></div>
          <div className="w-3/12 p-2">
            <button
              className="block w-full border transition font-semibold hover:bg-blue-500 hover:text-white border-blue-500 rounded-full text-blue-500 px-5 py-2"
              onClick={() => navigate(`/detail/${id}`)}
            >
              More Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionTweet;
