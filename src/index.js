import React from "react";
import App from "./App";
import Ide from "./intcode"
import ReactDOM from 'react-dom/client';
const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(
        <React.StrictMode>
            <Ide/>
        </React.StrictMode>
    )
