import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  return (
    <div className="w-full max-w-96">
      <div className=" rounded-2xl bg-white bg-opacity-10 shadow-2xl m-4 p-2">
        <h1 className="text-center text-2xl font-medium p-6">ANNOUNCEMENT</h1>
        <hr />
        <div className="p-2 flex flex-col gap-2">
          <h1 className=" font-medium text-lg">Exiting Project Launch!</h1>
          <h2 className=" text-sm italic">
            DevForgers, get ready to dive into our latest project, CodexCraft!
          </h2>
          <p className="text-xs font-thin">
            This revolutionary app aims to simplify code documentation. Join the
            CodexCraft team and make coding documentation a breeze!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl bg-white bg-opacity-10 shadow-2xl m-4 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold text-sm">
                Aira Suranol{" "}
                <span className="font-normal">has sent you a message</span>
              </h1>
              <p className=" text-xs">Lets go</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold text-sm">
                Johnzyll Jimeno{" "}
                <span className="font-normal">has sent you a message</span>
              </h1>
              <p className=" text-xs">Oo nga pre, sheeesshhh</p>
            </div>
          </div>
          <hr />
        </div>
        <div className=" flex justify-end text-sm text-purple-400 pr-4">
          More Notifications
        </div>
      </div>
    </div>
  );
};

export default Home;
