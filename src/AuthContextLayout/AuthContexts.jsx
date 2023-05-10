import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = {
    user,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
