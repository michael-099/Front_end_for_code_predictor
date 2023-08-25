import { useState } from "react";
import "./switch.css";
import { Link } from "react-router-dom";
//  function Switch(){

//     return (
//       <lable className="switch">
//         <input type="checkbox" />
//         <span className="slider">
//         </span>
//       </lable>
//     )
// }
// export default Switch;
function Switchs() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="div2">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider">
          <Link to="/code">
            <div className="back">
              <span className="chat">chat mode</span>
              <span className="code">code mode</span>
            </div>
          </Link>
        </span>
      </label>
    </div>
  );
}
export default Switchs;
