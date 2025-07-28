import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
