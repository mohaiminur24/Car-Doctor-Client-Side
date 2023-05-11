import React, { useContext } from "react";
import loginpic from "../assets/images/login/login.svg";
import LoginwithSocial from "./LoginwithSocial";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContextLayout/AuthContexts";

const LoginPage = () => {
  const {handleLoginUser} = useContext(AuthContext);
  const nevigate = useNavigate();

  const LoginUser = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.emailaddress.value;
    const pass = form.password.value;
    if(!email){
      alert("Must input your email!");
      return;
    }else if(!pass){
      alert("Must input your Password");
      return;
    };

    handleLoginUser(email,pass)
    .then(res=>{
      alert("Login user successfully");
      form.reset();
      nevigate("/");
    }).catch(error=>{
      alert(error.message);
    })
  };


  return (
    <div className="grid grid-cols-2 justify-center items-center p-20 font-inter">
      <img className="w-3/5 mx-auto" src={loginpic} alt="" />
      <div className="border p-20 rounded-md">
        <h1 className="text-3xl mb-5 font-bold text-center">Login</h1>
        <form onSubmit={LoginUser}>
          <label className="tex-sm font-bold my-1" htmlFor="email">
            Email Address
          </label>
          <input
            className="border w-full rounded-md block px-3 py-2 text-sm outline-none mb-2"
            type="email"
            placeholder="Your Email"
            name="emailaddress"
            id="emailaddress"
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
            value="Login"
          />
        </form>
        <LoginwithSocial />
        <div className="text-center text-sm">
          <span className="">
            Need Account?{" "}
            <NavLink to="/signup" className="font-bold text-yellow-500">
              Sign Up
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
