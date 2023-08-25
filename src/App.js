import { useState } from "react";
import Head from "./components/head/head";
import Chat from "./components/chat/Chat";
import Code from "./components/code/Code";
import Switchs from "./components/Switch/switch";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Head />
      <Switchs />
      <Routes>
      <Route exact path="/" element={<Chat/>} />
      <Route exact path="/code" element={<Code/>} />
      </Routes>
    </>
  );
}
export default App;
