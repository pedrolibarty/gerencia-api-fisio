import React, {createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AdmContext = createContext();

export const AdmProvider = ({ children }) => {
  const [licens, setlicens] = useState([]);


  return <AdmContext.Provider value={{licens, setlicens}}>{children}</AdmContext.Provider>;
};
 