import { HiHome, HiOutlineHashtag } from "react-icons/hi";
import { IoMdNotifications, IoIosListBox } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { GiPlagueDoctorProfile } from "react-icons/gi";
const userData = localStorage.getItem("data_user")
  ? JSON.parse(localStorage.getItem("data_user") || "")
  : "";
const navMenu = [
  {
    id: 1,
    name: "Beranda",
    path: "/beranda",
    icon: <HiHome size={22} className="text-gray-500" />,
  },
  {
    id: 2,
    name: "Jelajahi",
    path: "/jelajahi",
    icon: <HiOutlineHashtag size={22} className="text-gray-500" />,
  },
  {
    id: 3,
    name: "Notifikasi",
    path: "/notifikasi",
    icon: <IoMdNotifications size={22} className="text-gray-500" />,
  },
  {
    id: 4,
    name: "Pesan",
    path: "/pesan",
    icon: <FaEnvelope size={22} className="text-gray-500" />,
  },
  {
    id: 5,
    name: "Daftar",
    path: "/daftar",
    icon: <IoIosListBox size={22} className="text-gray-500" />,
  },
  {
    id: 6,
    name: "Markah",
    path: "/markah",
    icon: <BsBookmarkFill size={22} className="text-gray-500" />,
  },
  // {
  //   id: 7,
  //   name: "Twitter Blue",
  //   path: "/twitter-blue",
  //   icon: <FaEnvelope size={22} className="text-gray-500" />,
  // },
  {
    id: 8,
    name: "Profile",
    path: `/profil/${userData.id}`,
    icon: <GiPlagueDoctorProfile size={22} className="text-gray-500" />,
  },
  {
    id: 9,
    name: "Lainnya",
    path: "/lainnya",
    icon: <BsThreeDots size={22} className="text-gray-500" />,
  },
];

export default navMenu;
