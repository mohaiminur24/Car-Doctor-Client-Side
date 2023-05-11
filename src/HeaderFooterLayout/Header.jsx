import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { BiSearch,BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const navitems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "text-yellow-500"}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "text-yellow-500"}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "text-yellow-500"}
          to="/addservice"
        >
          Add Service
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "text-yellow-500"}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => isActive && "text-yellow-500"}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="flex flex-col gap-2 p-5 dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
          >
            {navitems}
          </ul>
        </div>
        <img className="w-16 ml-5" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-5 font-bold px-1">{navitems}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        <BiShoppingBag/>
        <BiSearch/>
        <NavLink to="/login"><button className="btn btn-warning btn-outline rounded-md">Login</button></NavLink>
      </div>
    </div>
  );
};

export default Header;
