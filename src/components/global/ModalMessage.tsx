import { BsX } from "react-icons/bs";

type ModalMessageProps = {
  header: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalMessage = ({ header, setIsOpen }: ModalMessageProps) => {
  return (
    <>
      <div className="fixed w-full min-h-screen bg-opacity-40 top-0 left-0 bg-black z-10" />
      <div className="fixed w-1/2 mx-auto left-0 right-0 z-10">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3">
            <h5 className="text-lg">{header}</h5>
            <BsX
              size={28}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="message-content py-5 max-h-[300px] h-[300px] overflow-y-scroll">
            <div className="flex flex-col gap-4">
              {/* opponent */}
              <div className="w-1/2 bg-red-500 p-3">asd</div>
              {/* user */}
              <div className="w-1/2 ml-auto bg-green-500 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus accusamus placeat nulla quia sunt tenetur veniam magni
                quas commodi porro ratione, quam, numquam vero! Doloribus nam
                quos aspernatur, debitis doloremque amet velit hic consequuntur
                sequi officia nihil, tempora, ab iusto inventore laborum sed!
                Vero tempora repudiandae distinctio dignissimos aliquid magni
                blanditiis debitis dolores voluptatibus sit sequi, molestiae
                omnis velit vel inventore quisquam ea doloribus optio officiis
                quam excepturi consequatur maxime. Esse consequuntur
                perspiciatis pariatur. Dolorem explicabo excepturi blanditiis
                cupiditate deserunt veniam dolore aliquid debitis, maxime
                veritatis architecto consectetur, perferendis ducimus
                exercitationem quaerat vitae sequi deleniti at, voluptatum quam
                commodi quisquam?
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="ketikkan pesan anda . . ."
            className="border rounded-lg px-3 py-4 w-full"
          />
          <button className="bg-blue-500 w-full py-2 font-semibold text-white rounded-lg mt-3">
            Kirim
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalMessage;
