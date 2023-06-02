import { useState } from "react";
import { MessageCard, ViewHeader } from "../../components";
import { messageDummy } from "../../models/messageDummy";
import ModalMessage from "../../components/global/ModalMessage";

const Pesan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageHeader, setMessageHeader] = useState("");
  console.log(messageHeader);
  return (
    <>
      <ViewHeader title="Pesan" isBorder={true} />
      {isOpen && <ModalMessage header={messageHeader} setIsOpen={setIsOpen} />}
      {messageDummy.map((item, index) => (
        <MessageCard
          setIsOpen={setIsOpen}
          setMessageHeader={setMessageHeader}
          key={index}
          username={item.username}
          email={item.email}
        />
      ))}
    </>
  );
};

export default Pesan;
