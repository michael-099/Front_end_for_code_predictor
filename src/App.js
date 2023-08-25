import { useState } from "react";
import Head from "./components/head/head";
import Chat from "./components/chat/Chat";
import Code from "./components/code/Code";
import Switchs from "./components/Switch/switch";
import { Route,Router } from "react-router-dom";
function App() {
  return (
    <>
      <Head />
      <Switchs />
      <Router>
        <Switch>
          <Route exact path="/chat">
            <Chat className="chat" />
          </Route>
          <Route exact path="/code">
            <Code />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
