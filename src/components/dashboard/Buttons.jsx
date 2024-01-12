import DashboardHandlers from "./DashboardHandlers"

const Buttons = () => {
    const dashboardHandlers = DashboardHandlers()

    return (
        <div>
            <button className="btn btn-success" onClick={dashboardHandlers.toggleAddNewClientHandler}>Add New Client</button>
        </div>
    )
}

export default Buttons