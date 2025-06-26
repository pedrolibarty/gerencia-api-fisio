import { useContext } from "react";
import { LicenseStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";

const License = () => {
  const { licens, setlicens } = useContext(AdmContext);

  const setDetails = (id) => {
    const updated = licens.map((l) =>
      l.id === id ? { ...l, details: !l.details } : l
    );

    setlicens(updated);
  };

  return (
    <LicenseStyled>
      <ul className="list-infos">
        {licens.filter((l) => l.ind_new === false).map((l) => {
          return (
            <li
              className="infos"
              key={l.id}
              onClick={() => {
                setDetails(l.id);
              }}
            >
              <div className="container">
                <div className="content">
                  <p className="mac">{l.mac}</p>
                  <p className="name">{l.name}</p>
                </div>
                <p className="license">
                  {l.status_license === true
                    ? `${l.days_license} dia(s) restantes`
                    : "Inativo"}
                </p>
              </div>
              {l.details === true && (
                <ul className="list-details">
                  <li className="details">Empresa: {l.company}</li>
                  <li className="details">Arquivo: {l.id_file}</li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </LicenseStyled>
  );
};

export default License;
