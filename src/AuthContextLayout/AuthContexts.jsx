import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../FireBaseConfiglayout/FirebaseConfig";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [homedataloading , sethomedataloading] = useState(false);


  const handleRegistration =(email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
  };

  const UserLogOut = ()=>{
    return signOut(auth);
  };

  const handleLoginUser = (email, pass)=>{
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handlegooglelogin = ()=>{
    return signInWithPopup(auth, googleProvider);
  };
  
  const handlegithublogin =()=>{
    return signInWithPopup(auth, githubProvider);
  }




  // Active user located
  useEffect(()=>{
      const unsuscribe = onAuthStateChanged(auth, (currentuser)=>{
        setUser(currentuser);
        setLoading(false);
      });

      return ()=>{
        return unsuscribe;
      }
  },[])


  const contextValue = {
    user,
    loading,
    handleRegistration,
    UserLogOut,
    handleLoginUser,
    homedataloading,
    sethomedataloading,
    handlegooglelogin,
    handlegithublogin
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
