import { Route, Routes } from "react-router-dom";
import Index from "./pages/user/Index";
import UpFeed from "./pages/user/UpFeed";
import Home from "./pages/user/Home";
import "./app.css";
import Messages from "./pages/user/Messages";

const App = () => {
  return (
    <div className=" font-poppins">
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Home />} />
          <Route path="/up-feed" element={<UpFeed />} />
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
