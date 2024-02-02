import { Link } from "react-router-dom"
import UIHandlers from "./tabs/ui/UIHandlers"

const Buttons = () => {

    const uiHandlers = UIHandlers()

    return (
        <div className="flex flex-row justify-between">
            <Link to="/" className="btn btn-success">Return to Dashboard</Link>
            <button className="btn btn-success" onClick={uiHandlers.updateClientHandler}>Update Client {"(CTRL + S)"}</button>
        </div>
    )
}

export default Buttons