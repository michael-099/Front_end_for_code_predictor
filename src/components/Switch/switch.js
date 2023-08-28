import { useState, } from "react";
import { useNavigate  } from "react-router-dom";
import "./switch.css";

function Switchs() {
  const navigate = useNavigate();
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
    if (window.location.pathname === "/") {
      navigate("/code");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="div2">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider">
            <div className="back">
              <span className="chat">chat mode</span>
              <span className="code">code mode</span>
            </div>
        </span>
      </label>
    </div>
  );
}
export default Switchs;
