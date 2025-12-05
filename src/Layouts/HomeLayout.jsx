import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-stone-200 p-5">
      <Navbar/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
