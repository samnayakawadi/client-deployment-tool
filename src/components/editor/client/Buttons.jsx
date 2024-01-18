import { Link } from "react-router-dom"

const Buttons = () => {
    return (
        <div className="flex flex-row justify-between">
            <Link to="/" className="btn btn-success">Return to Dashboard</Link>
            <button className="btn btn-success">Save Client</button>
        </div>
    )
}

export default Buttons