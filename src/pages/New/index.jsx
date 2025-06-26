import { useContext } from "react";
import { NewStyled } from "./style";
import { AdmContext } from "../../contexts/AdmContext";

const New = () => {
  const { setIsModal, setNewLicense } = useContext(AdmContext);

  const openModalRegister = (mac, id_file) => {
    setNewLicense({"mac": mac, "id_file": id_file})
    setIsModal(true)
  }

  return (
    <NewStyled>
      <ul>
        <li>
          <div className="container">
            <div className="content">
              <h2>3A:7C:91:BD:42:F5</h2>
              <span>arquivo-talles</span>
            </div>
            <div className="awnser">
              <button className="yes" onClick={() => openModalRegister("3A:7C:91:BD:42:F5", "arquivo-talles")}>
                Aprovar
              </button>
            </div>
          </div>
        </li>
      </ul>
    </NewStyled>
  );
};

export default New;
