import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyContextProvider } from "./context/myPrincipalContext";

//importo el componente context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);
