import React from "react";
import loginpic from "../assets/images/login/login.svg";
import LoginwithSocial from "./LoginwithSocial";
import { NavLink } from "react-router-dom";

const RegistationPage = () => {
  return (
    <div className="grid grid-cols-2 p-20 font-inter justify-center items-center">
      <img className="w-3/5 mx-auto" src={loginpic} alt="" />
      <div className="border p-20 rounded-md">
        <h1 className="text-3xl mb-5 font-bold text-center">Registation</h1>
        <form>
          <label className="tex-sm font-bold my-1" htmlFor="name">
            Your Name
          </label>
          <input
            className="border w-full rounded-md block px-3 py-2 text-sm outline-none mb-2"
            type="text"
            placeholder="Name"
            name="name"
            id="name"
          />
          <label className="tex-sm font-bold my-1" htmlFor="email">
            Photo URL
          </label>
          <input
            className="border w-full rounded-md block px-3 py-2 text-sm outline-none mb-2"
            type="text"
            placeholder="Photo URL"
            name="photourl"
            id="photourl"
          />
          <label className="tex-sm font-bold my-1" htmlFor="email">
            Email Address
          </label>
          <input
            className="border w-full rounded-md block px-3 py-2 text-sm outline-none mb-2"
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
          />
          <label className="tex-sm font-bold my-1" htmlFor="email">
            Password
          </label>
          <input
            className="border w-full rounded-md block px-3 py-2 text-sm outline-none mb-2"
            type="password"
            placeholder="Password"
            name="password"
            id="email"
          />
          <input
            className="w-full my-3 py-2 bg-yellow-500 font-bold text-white rounded-md"
            type="submit"
            value="Registration"
          />
        </form>
        <LoginwithSocial />
        <div className="text-center text-sm">
          <span className="">
            Already have an Account?
            <NavLink to="/login" className="font-bold text-yellow-500">
              Login
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistationPage;
