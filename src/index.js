import React from "react";
import App from "./App";
import Ide from "./intcode"
import ReactDOM from 'react-dom/client';
import Switch1 from "./switch"
const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(
        <React.StrictMode>
            <Switch1/>
            {/* <Ide/> */}
        </React.StrictMode>
    )
