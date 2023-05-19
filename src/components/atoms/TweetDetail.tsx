type DetailTweetProps = {
  question: string;
  answer: string;
};

const TweetDetail = ({ question, answer }: DetailTweetProps) => {
  return (
    <>
      <div className="bg-white border p-2 rounded-sm">
        <div className="top">
          <p className="font-semibold mb-2">{question}</p>
          <hr />
          <p className="mt-3">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default TweetDetail;
