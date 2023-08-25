import { useState } from "react";
import "./Chat.css";
import Head from "./head";
import Switch from './switch';
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSend = () => {
    console.log("sent");
  };
  return (
    <div className="App">
     
      <div className="chat">
        <div className="user-message">
          {" "}
          Lorem ipsum dolor sit amet, ei quo hendrerit definiebas, id ornatus
          suscipit intellegam has. Ei nam nemore vocibus mediocritatem. Epicurei
          sapientem ius ea. Eos fierent appellantur eu, copiosae tacimates
          scribentur mea ut. Ius summo voluptatum te, mucius mandamus explicari
          ad mei. Everti discere conceptam quo ut, summo possit discere ius ex.
          Sit ex postulant reprimique intellegam, vel malorum elaboraret at. Ex
          dicat eligendi repudiandae eos, eu laoreet elaboraret vis. No quo
          ponderum torquatos, cum ei admodum similique, ex stet error percipit
          pro. Zril fuisset singulis mei ne, ad vel vero facilis. Commune
          maiestatis nam in, falli vitae percipit eam cu. Tritani interpretaris
          id qui, everti inermis probatus at usu. Novum voluptaria disputando
          eos cu, mel ullum oratio graece id, in utroque appareat sed. Principes
          gloriatur an eam. Gloriatur reprehendunt qui ei. Omnes putent
          temporibus ius id, quis everti legendos vel te. Sit et euismod
          torquatos, ei brute utroque expetenda vix. Et sit enim fabulas. Quo
          vidit intellegat ea, nec etiam pericula no. Omnes nonumy mediocritatem
          eu his. An sea dicant scribentur. Ad lorem eirmod bonorum cum, no
          expetendis conclusionemque has. Mediocrem torquatos persecuti te quo
        </div>
        <div className="bot-message">
          {" "}
          this is a bot Lorem ipsum dolor sit amet, ei quo hendrerit definiebas,
          id ornatus suscipit intellegam has. Ei nam nemore vocibus
          mediocritatem. Epicurei sapientem ius ea. Eos fierent appellantur eu,
          copiosae tacimates scribentur mea ut. Ius summo voluptatum te, mucius
          mandamus explicari ad mei. Everti discere conceptam quo ut, summo
          possit discere ius ex. Sit ex postulant reprimique intellegam, vel
          malorum elaboraret at. Ex dicat eligendi repudiandae eos, eu laoreet
          elaboraret vis. No quo ponderum torquatos, cum ei admodum similique,
          ex stet error percipit pro. Quo vidit intellegat ea, nec etiam
          pericula no. Omnes nonumy mediocritatem eu his. An sea dicant
          scribentur. Ad lorem eirmod bonorum cum, no expetendis conclusionemque
          has. Mediocrem torquatos persecuti te quo{" "}
        </div>
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img className="img1" src="send.svg" onClick={handleSend} />
      </div>
    </div>
  );
}
export default App;
