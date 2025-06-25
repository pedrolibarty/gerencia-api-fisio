import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AdmProvider } from "./contexts/AdmContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdmProvider>
        <App />
      </AdmProvider>
    </BrowserRouter>
  </StrictMode>
);
