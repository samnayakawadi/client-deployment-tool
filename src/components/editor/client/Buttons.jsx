import { Link } from "react-router-dom"
import ClientHandlers from "./ClientHandlers"

const Buttons = () => {

    const clientHandlers = ClientHandlers()

    return (
        <div className="flex flex-row justify-between">
            <Link to="/" className="btn btn-success">Return to Dashboard</Link>
            <button className="btn btn-success" onClick={clientHandlers.updateClientHandler}>Update Client</button>
        </div>
    )
}

export default Buttons