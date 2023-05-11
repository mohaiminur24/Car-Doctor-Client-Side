import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LoginwithSocial = () => {
  return (
    <div className="w-full font-inter">
      <h1 className="text-center font-semibold">or Sign In with</h1>
      <div className="flex gap-5 justify-center my-5">
        <button className="p-3 bg-gray-50 rounded-full">
          <FaFacebookF className="text-lg" />
        </button>
        <button className="p-3 bg-gray-50 rounded-full">
          <FaLinkedinIn className="text-lg" />
        </button>
        <button className="p-3 bg-gray-50 rounded-full">
          <FaGoogle className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default LoginwithSocial;
