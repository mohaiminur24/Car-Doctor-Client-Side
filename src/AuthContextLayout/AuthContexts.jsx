import React, { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../FireBaseConfiglayout/FirebaseConfig";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleRegistration =(email, pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
  };


  const contextValue = {
    user,
    handleRegistration
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
