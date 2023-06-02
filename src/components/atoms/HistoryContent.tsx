import { TweetType } from "../../utils/types";

type HistoryContentProps = {
  data: TweetType[];
};

const HistoryContent = ({ data }: HistoryContentProps) => {
  return (
    <>
      <div className="max-h-[400px] overflow-y-scroll flex flex-col gap-5 py-3">
        {data.reverse().map((item, index) => (
          <div key={index} className="bg-blue-100 rounded-full px-5 py-2">
            {item.question}
          </div>
        ))}
      </div>
    </>
  );
};

export default HistoryContent;
