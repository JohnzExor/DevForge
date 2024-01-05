import { IoMdSearch } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Messages = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="flex w-full md:p-10">
      <div className="flex w-full md:hidden">
        {isOpen ? (
          <div className="md:flex-col h-full gap-4 bg-white bg-opacity-10 rounded-3xl w-full ">
            <div className="flex flex-col gap-3 m-4">
              <h1 className="text-2xl font-medium">Messages</h1>
              <div className="bg-white text-black flex rounded-3xl py-1 px-3">
                <IoMdSearch size={30} />
                <input type="text" placeholder="Search Messages" />
              </div>
            </div>
            <div>
              <div
                onClick={toggle}
                className="flex items-center gap-2 bg-black bg-opacity-10 p-4"
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-bold text-lg">Abdul Salsalani</span>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">LEts go</p>
                    <span className=" text-purple-600 text-xs">2m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white w-full text-black rounded-3xl pt-2">
            <button onClick={toggle} className="flex items-center ">
              <IoIosArrowBack />
              Back
            </button>
            <div className=" shadow-2xl p-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-bold text-lg text-purple-950">
                    Abdul Salsalani
                  </span>
                  <p className="text-xs">Not Active</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden w-full md:flex">
        <div className="md:flex-col h-full gap-4 bg-white bg-opacity-10 rounded-s-3xl ">
          <div className="flex flex-col gap-3 m-4">
            <h1 className="text-2xl font-medium">Messages</h1>
            <div className="bg-white text-black flex rounded-3xl py-1 px-3">
              <IoMdSearch size={30} />
              <input type="text" placeholder="Search Messages" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 bg-black bg-opacity-10 p-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-bold text-lg">Abdul Salsalani</span>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Lets go</p>
                  <span className=" text-purple-600 text-xs">2m</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white w-full text-black rounded-e-3xl">
          <div className=" shadow-2xl p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-bold text-lg text-purple-950">
                  Abdul Salsalani
                </span>
                <p className="text-xs">Not Active</p>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <textarea className="w-full h-10 bg-purple-100 rounded-3xl p-2 px-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
