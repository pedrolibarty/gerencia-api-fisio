import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AdmContext = createContext();

export const AdmProvider = ({ children }) => {
  const [licens, setlicens] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [newLicense, setNewLicense] = useState({});
  const [login, setLogin] = useState({});

  const api = "http://api-fisio-tp.vercel.app/api/";

  const navigate = useNavigate();

  const registerLicense = () => {
    setIsModal(true);
  };

  const handleLogin = async () => {
    const username = login.username?.trim();
    const password = login.password?.trim();

    if (!username || !password) {
      toast("Preencha todos os campos!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    const response = await fetch(`${api}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      toast("Usuário e/ou senha inválidos!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    navigate("/dashboard");
  };

  const getLicense = async () => {
    try {
      const res = await fetch(`${api}all/permission`, {
        method: "GET",
      });

      if (!res.ok) {
        toast("Erro ao listar licenças", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });

        return;
      }

      const data = await res.json();

      setlicens(data);
    } catch (error) {
      toast("Erro ao listar licenças", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }
  };

  const createLicense = async () => {
    const { id, name, company, days_license, id_file } = newLicense;

    if (!id || !name || !company || !days_license || !id_file) {
      toast("Preencha todos os campos!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    const license = {
      id,
      name,
      days_license,
      id_file,
      ind_new: false,
      status_license: true,
    };

    try {
      const res = await fetch(`${api}/update/permission`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(license),
      });

      if (!res.ok) {
        toast("Erro na criação!", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });

        return;
      }

      toast("Licença criada!", {
        duration: 4000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      setIsModal(false);
      getLicense();

      return;
    } catch (error) {
      toast("Erro na criação!", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }
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
        handleLogin,
        getLicense,
        createLicense,
      }}
    >
      {children}
    </AdmContext.Provider>
  );
};
