import { useState } from "react";
import "./Chat.css";
import chatData from "./Chat.json"
import { Content } from "antd/es/layout/layout";
function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSend = () => {
    console.log("sent");
  };
  return (
    <div className="App">
      <div className="chat_box">
        <div className="chat_box">
          {chatData.map((item, index) => {
            const className = item.id === "bot" ? "bot-message" : "user-message";
            return (
              <div key={index} className={className}>
                {item.content}
              </div>
            );
          })}
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
export default Chat;
