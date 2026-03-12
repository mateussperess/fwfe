import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss"
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Home />
  </StrictMode>,
);
