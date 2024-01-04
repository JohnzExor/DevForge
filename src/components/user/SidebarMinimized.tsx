import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  BsFillLaptopFill,
  BsChatRightTextFill,
  BsCartDashFill,
  BsFileEarmarkCheckFill,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa6";

type Props = {
  onClick: () => void;
};

const SidebarMinimized = ({ onClick }: Props) => {
  return (
    <div className="hidden md:flex flex-col items-center gap-5 h-full shadow-2xl bg-white bg-opacity-10 p-3">
      <button onClick={onClick}>
        <FaBars size={30} />
      </button>
      <div className="flex items-center gap-2">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium bg-white w-full p-4 rounded-2xl"
        >
          <MdDashboard size={30} className=" text-purple-900" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium w-full  p-4 rounded-2xl"
        >
          <BsFillLaptopFill size={20} />
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium  w-full  p-4 rounded-2xl"
        >
          <BsChatRightTextFill size={20} />
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium  w-full p-4 rounded-2xl"
        >
          <BsCartDashFill size={20} />
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium  w-full p-4 rounded-2xl"
        >
          <BsFileEarmarkCheckFill size={25} />
        </Link>
      </div>
      <button className="mt-auto text-sm">LOG OUT</button>
    </div>
  );
};

export default SidebarMinimized;
