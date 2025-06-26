import { useContext } from "react";
import { NewStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";

const New = () => {
  const { licens, setIsModal, setNewLicense } = useContext(AdmContext);

  const openModalRegister = (id, mac, id_file) => {
    setNewLicense({ id: id, mac: mac, id_file: id_file });
    setIsModal(true);
  };

  return (
    <NewStyled>
      <ul>
        {
        licens
          .filter((l) => l.ind_new === true).length === 0 ? (<h2>Sem solicitações novas</h2>) : 
        
        licens
          .filter((l) => l.ind_new === true)
          .map((l) => {
            return (
              <li key={l.id}>
                <div className="container">
                  <div className="content">
                    <h2>{l.mac}</h2>
                    <span>
                      {l.id_file === "" ? "Sem identificador" : l.id_file}
                    </span>
                  </div>
                  <div className="awnser">
                    <button
                      className="yes"
                      onClick={() => openModalRegister(l.id, l.mac, l.id_file)}
                    >
                      Aprovar
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </NewStyled>
  );
};

export default New;
