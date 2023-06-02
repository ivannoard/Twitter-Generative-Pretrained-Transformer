type MessageCardProps = {
  username: string;
  email: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessageHeader: React.Dispatch<React.SetStateAction<string>>;
};

const MessageCard = ({
  username,
  email,
  setIsOpen,
  setMessageHeader,
}: MessageCardProps) => {
  function handleIsOpen(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setIsOpen(true);
    setMessageHeader(username);
  }
  return (
    <>
      <div className="bg-white border-b-2 border-gray-200 p-5">
        <div className="flex gap-2">
          <div className="bg-gray-500 w-[45px] h-[45px] rounded-full" />
          <div className="header-card flex justify-between w-full">
            <div className="user-profile">
              <h5 className="font-semibold">{username}</h5>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
            <button
              onClick={(e) => handleIsOpen(e)}
              className="text-black border-2 border-blue-500 transition hover:bg-blue-500 hover:text-white px-12 py-1  rounded-full font-semibold"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
