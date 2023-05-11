import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../FireBaseConfiglayout/FirebaseConfig";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleRegistration =(email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
  };

  const UserLogOut = ()=>{
    return signOut(auth);
  };

  const handleLoginUser = (email, pass)=>{
    return signInWithEmailAndPassword(auth, email, pass);
  }




  // Active user located
  useEffect(()=>{
      const unsuscribe = onAuthStateChanged(auth, (currentuser)=>{
        setUser(currentuser);
      });

      return ()=>{
        return unsuscribe;
      }
  },[])


  const contextValue = {
    user,
    handleRegistration,
    UserLogOut,
    handleLoginUser
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
