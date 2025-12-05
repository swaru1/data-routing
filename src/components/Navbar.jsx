import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 px-20 mb-4 flex  gap-5 justify-between p-3">
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
      </div>
      Navbar
    </nav>
  );
};

export default Navbar;
