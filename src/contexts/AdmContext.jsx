import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AdmContext = createContext();

export const AdmProvider = ({ children }) => {
  const [licens, setlicens] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [newLicense, setNewLicense] = useState({});
  const [login, setLogin] = useState({});

  const registerLicense = () => {
    setIsModal(true);
  };

  return (
    <AdmContext.Provider
      value={{
        licens,
        setlicens,
        isModal,
        setIsModal,
        registerLicense,
        newLicense,
        setNewLicense,
        login,
        setLogin,
      }}
    >
      {children}
    </AdmContext.Provider>
  );
};
