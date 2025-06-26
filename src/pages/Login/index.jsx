import { useContext } from "react";
import { LoginStyled } from "./styles";
import { AdmContext } from "../../contexts/AdmContext";

const Login = () => {
  const { login, setLogin } = useContext(AdmContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login); 
  };

  return (
    <LoginStyled>
      <h1>Gerenciamento API Fisio</h1>

      <div className="box-login">
        <form onSubmit={handleSubmit}>
          <div className="content-login">
            <span>Login:</span>
            <input
              type="text"
              name="username"
              value={login.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="content-login">
            <span>Senha:</span>
            <input
              type="password"
              name="password"
              value={login.password || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </LoginStyled>
  );
};

export default Login;
