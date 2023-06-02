import { useNavigate } from "react-router-dom";
import { TweetType } from "../../utils/types";

type HistoryContentProps = {
  data: TweetType[];
};

const HistoryContent = ({ data }: HistoryContentProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-h-[400px] overflow-y-scroll flex flex-col gap-5 py-3">
        {data.reverse().map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-full px-5 py-2 cursor-pointer"
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            {item.question}
          </div>
        ))}
      </div>
    </>
  );
};

export default HistoryContent;
