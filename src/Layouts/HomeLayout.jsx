import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-stone-200 h-screen p-5">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
