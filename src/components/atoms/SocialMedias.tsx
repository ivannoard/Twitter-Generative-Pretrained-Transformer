import { useState, useEffect } from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
type SocialMediasProps = {
  name: string;
  username: string;
  url: string;
};

const SocialMedias = ({ name, username, url }: SocialMediasProps) => {
  const [icon, setIcon] = useState<React.ReactElement>();

  function openNewTab(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  useEffect(() => {
    switch (name) {
      case "Instagram":
        setIcon(<BsInstagram size={20} className="text-gray-700" />);
        break;
      case "Github":
        setIcon(<BsGithub size={20} className="text-gray-700" />);
        break;
      case "Linkedin":
        setIcon(<BsLinkedin size={20} className="text-gray-700" />);
        break;
      default:
        break;
    }
  }, [name]);
  return (
    <>
      <div className="flex items-center gap-2">
        {icon}
        <p
          className="underline text-blue-500 cursor-pointer"
          onClick={() => openNewTab(url)}
        >
          {username}
        </p>
      </div>
    </>
  );
};

export default SocialMedias;
