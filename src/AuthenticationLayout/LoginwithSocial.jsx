import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthContextLayout/AuthContexts";
import { Toaster, toast } from "react-hot-toast";

const LoginwithSocial = () => {
  const {handlegooglelogin,handlegithublogin} = useContext(AuthContext);
  const loginwithgoogle =()=>{
    handlegooglelogin()
    .then(res=>{
      toast.success('Successfully Login with Google!')
    }).catch(error=>{
      toast.error("Something wrong Please try again!")
    });
  };

  const githublogin =()=>{
    handlegithublogin()
    .then(res=>{
      toast.success('Successfully Login with Github!');
    }).catch(error=>{
      toast.error("Something wrong Please try again!");
    })
  }
  return (
    <div className="w-full font-inter">
      <div><Toaster/></div>
      <h1 className="text-center font-semibold">or Sign In with</h1>
      <div className="flex gap-5 justify-center my-5">
        <button onClick={githublogin} className="p-3 bg-gray-50 rounded-full">
          <FaGithub className="text-lg" />
        </button>
        <button onClick={loginwithgoogle} className="p-3 bg-gray-50 rounded-full">
          <FaGoogle className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default LoginwithSocial;
