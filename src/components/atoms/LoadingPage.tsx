import { AiOutlineLoading } from "react-icons/ai";

const LoadingPage = () => {
  return (
    <div className="flex w-full h-[300px] items-center justify-center">
      <AiOutlineLoading size={60} className="text-gray-700 animate-spin" />
    </div>
  );
};

export default LoadingPage;
