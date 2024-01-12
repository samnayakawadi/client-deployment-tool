import { useDispatch } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"

const DashboardHandlers = () => {

    const dispatch = useDispatch()

    const toggleAddNewClientHandler = () => {
        console.log("inside toggleAddNewClientHandler")
        dispatch(dashboardActions.toggleAddNewClient())
    }

    const updateClientNameHandler = (e) => {
        dispatch(dashboardActions.updateClientName(e.target.value))
    }

    const dashboardHandlers = {
        toggleAddNewClientHandler,
        updateClientNameHandler
    }

    return dashboardHandlers
}

export default DashboardHandlers