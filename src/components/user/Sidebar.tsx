import { ReactNode, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdDashboard } from "react-icons/md";
import {
  BsCartDashFill,
  BsChatRightTextFill,
  BsFileEarmarkCheckFill,
  BsFillLaptopFill,
} from "react-icons/bs";
import { NavLink, useLocation, useMatch } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
const Sidebar = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const routes = [
    {
      path: "/",
      name: "DASHBOARD",
      icon: <MdDashboard />,
    },
    {
      path: "/up-feed",
      name: "UP-FEED",
      icon: <BsFillLaptopFill />,
    },
    {
      path: "/messages",
      name: "MESSAGES",
      icon: <BsChatRightTextFill />,
    },
    {
      path: "/shop",
      name: "SHOP",
      icon: <BsCartDashFill />,
    },
    {
      path: "/records",
      name: "RECORDS",
      icon: <BsFileEarmarkCheckFill />,
    },
  ];
  return (
    <div className="flex h-full">
      <motion.div
        animate={{
          width: isOpen ? "350px" : "80px",

          transition: {
            duration: 0.5,
            ease: "easeInOut",
            damping: 10,
          },
        }}
        className=" bg-white bg-opacity-10 md:flex flex-col items-center gap-7 pt-3 hidden"
      >
        {isOpen ? (
          <motion.button
            onClick={toggle}
            animate={{ opacity: [0, 1] }}
            className="ml-auto pr-4"
          >
            <IoClose size={30} />
          </motion.button>
        ) : (
          <button onClick={toggle}>
            <FaBars size={30} />
          </button>
        )}
        <div className="flex items-center gap-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isOpen ? (
            <motion.label
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 0.5, ease: "easeInOut" }}
              className="text-xl font-medium"
            >
              Salsalani, Abdul
            </motion.label>
          ) : null}
        </div>
        <motion.div
          animate={{
            paddingTop: isOpen ? "50px" : "0px",
            padding: isOpen ? "2em" : "0.5em",
          }}
          transition={{ ease: "easeIn" }}
          className="flex flex-col gap-5 w-full"
        >
          {routes.map((data, index) => (
            <NavLink
              to={data.path}
              key={index}
              className={
                useMatch(data.path)
                  ? isOpen
                    ? "flex items-center gap-4 bg-black bg-opacity-20 w-full py-3 px-6 rounded-2xl"
                    : "flex justify-center items-center gap-4 bg-black bg-opacity-20 w-full py-3 px-6 rounded-2xl"
                  : isOpen
                  ? "flex items-center gap-4 w-full py-3 px-6 rounded-2xl"
                  : "flex items-center justify-center gap-4 w-full py-3 px-6 rounded-2xl"
              }
            >
              <div className="text-2xl">{data.icon}</div>
              {isOpen ? (
                <motion.div
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.5, ease: "easeInOut" }}
                  className=" text-lg"
                >
                  {data.name}
                </motion.div>
              ) : null}
            </NavLink>
          ))}
        </motion.div>
        <motion.button
          animate={{
            marginRight: isOpen ? "auto" : "0px",
            marginLeft: isOpen ? "20px" : "0px",
          }}
          transition={{ ease: "easeInOut" }}
          className="mt-auto pb-4 text-sm"
        >
          LOG OUT
        </motion.button>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
