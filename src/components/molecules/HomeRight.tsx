import { useState, useEffect, useContext } from "react";
import HistoryContent from "../atoms/HistoryContent";
import TrendingContent from "../atoms/TrendingContent";
import { TweetContext } from "../../context/TweetContext";

const HomeRight = () => {
  const { state } = useContext(TweetContext);
  const [active, setActive] = useState("Trending");
  const [content, setContent] = useState<JSX.Element>();
  useEffect(() => {
    switch (active) {
      case "Trending":
        return setContent(<TrendingContent />);
      case "History":
        return setContent(<HistoryContent data={state.data} />);
      default:
        break;
    }
  }, [active, state.data]);

  return (
    <>
      <div className="flex py-3 border-b-2 border-gray-200 bg-white">
        <button className="w-1/2" onClick={() => setActive("Trending")}>
          <h4 className="font-semibold">Trending</h4>
        </button>
        <button className="w-1/2" onClick={() => setActive("History")}>
          <h4 className="font-semibold">History</h4>
        </button>
      </div>
      <div className="sticky top-0 py-1 px-1 mt-5">{content}</div>
    </>
  );
};

export default HomeRight;
