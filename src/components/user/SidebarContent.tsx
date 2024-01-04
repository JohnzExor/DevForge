import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  BsFillLaptopFill,
  BsChatRightTextFill,
  BsCartDashFill,
  BsFileEarmarkCheckFill,
} from "react-icons/bs";

const SidebarContent = () => {
  return (
    <div className="flex flex-col items-start h-full">
      <div className="flex items-center gap-2">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <label className="text-xl font-medium">Salsalani, Abdul</label>
      </div>
      <div className="flex flex-col gap-4 w-full mt-10">
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium bg-black bg-opacity-20 w-full py-2 px-4 rounded-2xl"
        >
          <MdDashboard size={30} className=" text-purple-900" />
          DASHBOARD
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium w-full py-2 px-4 rounded-2xl"
        >
          <BsFillLaptopFill size={20} />
          UP-FEED
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium  w-full py-2 px-4 rounded-2xl"
        >
          <BsChatRightTextFill size={20} />
          MESSAGES
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium  w-full py-2 px-4 rounded-2xl"
        >
          <BsCartDashFill size={20} />
          SHOP
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-3 font-medium  w-full py-2 px-4 rounded-2xl"
        >
          <BsFileEarmarkCheckFill size={25} />
          RECORDS
        </Link>
      </div>
      <button className="mt-auto text-sm">LOG OUT</button>
    </div>
  );
};

export default SidebarContent;
