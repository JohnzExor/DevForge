import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { HiBars4 } from "react-icons/hi2";
import SidebarContent from "./SidebarContent";

const Header = () => {
  return (
    <div className="md:hidden flex gap-2 items-center bg-white bg-opacity-5 px-4 shadow-2xl">
      <Sheet>
        <SheetTrigger className="py-3">
          <HiBars4 size={30} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className=" bg-transparent text-white backdrop-blur-3xl border-0"
        >
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <label className="text-xl">DevForge</label>
    </div>
  );
};

export default Header;
