import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillLike } from "react-icons/ai";
import { IoChatbubble } from "react-icons/io5";
const UpFeed = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 md:p-10">
      <div className="flex gap-4 bg-white bg-opacity-10 w-full p-4 md:p-7 rounded-3xl">
        <Avatar className=" w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <form className=" flex flex-col gap-2 w-full">
          <textarea
            placeholder="How do you want to forge the future with your words John?"
            className=" rounded-3xl p-4 text-sm h-20 md:h-14 text-black"
          />
          <button className=" w-full bg-purple-900 rounded-3xl p-2">
            POST
          </button>
        </form>
      </div>
      <div>
        <div className="flex flex-col gap-2 p-4 md:p-7 bg-opacity-10 bg-white rounded-3xl">
          <div className="flex items-center gap-2">
            <Avatar className=" w-14 h-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold">
                Johnzyll Jimeno{" "}
                <span className="font-normal text-xs">is with </span>
                <span>Raven Salvador</span>
              </span>
              <span className=" text-xs">Yesterday at 3:02 PM</span>
            </div>
          </div>
          <p className="text-sm">
            What is TypeScript vs JavaScript? Difference between TypeScript and
            JavaScript - GeeksforGeeks TypeScript is known as an Object-oriented
            programming language whereas JavaScript is a prototype-based
            language. TypeScript has a feature known as Static typing but
            JavaScript does not support this feature. TypeScript supports
            Interfaces but JavaScript does not.
            <hr className="mt-4" />
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-2">
            <div className="flex gap-2 w-full md:w-fit">
              <div className="flex items-center gap-2">
                <AiFillLike size={30} /> 2
              </div>
              <div className="flex items-center gap-2">
                <IoChatbubble size={30} /> 3
              </div>
            </div>

            <div className="flex w-full gap-2">
              <Avatar className=" w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <button className=" w-full rounded-3xl p-2 text-sm h-10 bg-white text-black text-left pl-5">
                Leave a comment . . .
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpFeed;
