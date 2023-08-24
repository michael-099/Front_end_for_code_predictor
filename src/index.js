import React from "react";
import App from "./App";
import Ide from "./intcode";
import ReactDOM from "react-dom/client";
import Switch from "./switch";
import Head from "./head";
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head />
    <Switch className="switch" />
    <App className="chat" />
    {/* <Ide/>  */}
  </React.StrictMode>
);
