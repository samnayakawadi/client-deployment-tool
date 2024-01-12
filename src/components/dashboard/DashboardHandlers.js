import { useDispatch } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"

const DashboardHandlers = () => {

    const dispatch = useDispatch()

    const toggleAddNewClientHandler = () => {
        console.log("inside toggleAddNewClientHandler")
        dispatch(dashboardActions.toggleAddNewClient())
    }

    const dashboardHandlers = {
        toggleAddNewClientHandler
    }

    return dashboardHandlers
}

export default DashboardHandlers