import { Toaster } from "react-hot-toast";
import { Global } from "./styles/global";
import AppRoutes from "./routes";
import Register from "./pages/Register";
import { useContext } from "react";
import { AdmContext } from "./contexts/AdmContext";

function App() {
  const { isModal } = useContext(AdmContext);

  return (
    <>
      <Toaster position="top-right" />
      {isModal === true && <Register />}
      <Global />
      <AppRoutes />
    </>
  );
}

export default App;
