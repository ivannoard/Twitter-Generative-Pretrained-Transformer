import { MessageCard, ViewHeader } from "../../components";
import { messageDummy } from "../../models/messageDummy";

const Pesan = () => {
  return (
    <>
      <ViewHeader title="Pesan" isBorder={true} />
      {messageDummy.map((item, index) => (
        <MessageCard key={index} username={item.username} email={item.email} />
      ))}
    </>
  );
};

export default Pesan;
