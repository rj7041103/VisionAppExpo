import React, { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextAppProvider = ({ children }) => {
  const [nameUser, setNameUser] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const changeUserName = (name) => {
    setNameUser(name);
  };
  const changeIsCalling = () => {
    setIsCalling(!isCalling);
  };
  return (
    <UserContext.Provider
      value={{ nameUser, isCalling, changeIsCalling, changeUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextAppProvider;
