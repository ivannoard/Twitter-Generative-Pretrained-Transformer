import { useState, useEffect } from "react";

const HomeRight = () => {
  const [active, setActive] = useState("Trending");
  const [content, setContent] = useState("");
  useEffect(() => {
    switch (active) {
      case "Trending":
        return setContent("trending content");
      case "History":
        return setContent("history content");
      default:
        break;
    }
  }, [active]);

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
      <div className="sticky top-0 py-1 px-1 mt-5">
        <div className="bg-blue-100 rounded-full px-5 py-2 mt-5">{content}</div>
      </div>
    </>
  );
};

export default HomeRight;
