import { TweetType } from "../../utils/types";

type HistoryContentProps = {
  data: TweetType[];
};

const HistoryContent = ({ data }: HistoryContentProps) => {
  return (
    <>
      {data.map((item) => (
        <div className="bg-blue-100 rounded-full px-5 py-2 mt-5">
          {item.question}
        </div>
      ))}
    </>
  );
};

export default HistoryContent;
