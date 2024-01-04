import Header from "@/components/user/Header";
import Sidebar from "@/components/user/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="background-color h-screen text-white">
      <Header />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Index;
