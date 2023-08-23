import{Switch} from "antd"
import "./switch.css"
function Switch1(){
    return (
        <div className="switch">
            <Switch
            className="custom-switch"
            // size="large"
            checkedChildren="chat"
            unCheckedChildren="code"
            />
        </div>
    )
}
export default Switch1;