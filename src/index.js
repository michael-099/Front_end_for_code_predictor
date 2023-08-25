// import React from "react";
// import App from "./App";
// import Ide from "./intcode";
// import ReactDOM from "react-dom/client";
// import Switchs from "./switch";
// import Head from "./head";
// import "./index.css";
// import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Head />
//       <Switch>
//         <Switchs className="switch" />
//         <Route exact path="/chat">
//           <App className="chat" />
//         </Route>
//         <Route exact path="/code">
//           <Ide />
//         </Route>
//       </Switch>
//     </Router>
//   </React.StrictMode>
// );
import React from "react";
import App from "./App";
import Ide from "./components/code/Code";
import ReactDOM from "react-dom/client";
import Switchs from "./components/Switch/switch";
import Head from "./components/head/head";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
