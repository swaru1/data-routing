import { NavLink, Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="bg-stone-200 p-5">
      <nav className="bg-gray-300 px-20 mb-4 flex  gap-5 justify-between">
        <div className="links flex gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-700 font-semibold" : ""
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-700 font-semibold" : ""
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-700 font-semibold" : ""
            }
            to="/home/app"
          >
            App
          </NavLink>
        </div>
        Navbar
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
