import { useContext, useEffect, useState } from "react";
import { DashboardStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";
import License from "../License";
import New from "../New";

const teste = [
  {
    id: "ade9da10-b8bf-4804-8ab8-147a07de9921",
    name: "Mano taller",
    company: "Tales company",
    mac: "3A:7C:91:BD:42:F5",
    days_license: 20,
    status_license: true,
  },
  {
    id: "ade9da10-bf-4804-8ab8-147a07de9921",
    name: "Mano taller",
    company: "Tales company",
    mac: "3A:7C:91:BD:42:F5",
    days_license: 20,
    status_license: true,
  },
];

const Dashboard = () => {
  const { setlicens } = useContext(AdmContext);

  useEffect(() => {
    setlicens(
      teste.map((item) => ({
        ...item,
        details: false,
      }))
    );
  }, []);

  return (
    <DashboardStyled>
      <h1>Gerenciamento de licenças</h1>
      {/*<License />*/}
      <New />
    </DashboardStyled>
  );
};

export default Dashboard;
