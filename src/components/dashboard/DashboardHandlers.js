import { useDispatch, useSelector } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"
import DashboardServices from "./DashboardServices"
import { toast } from "react-toastify"

const DashboardHandlers = () => {

    const dispatch = useDispatch()
    const dashboardServices = DashboardServices()
    const clientName = useSelector(prevState => prevState.dashboard.modals.addNewClient.clientName)

    const toggleAddNewClientHandler = () => {
        dispatch(dashboardActions.toggleAddNewClient())
    }

    const updateClientNameHandler = (e) => {
        dispatch(dashboardActions.updateClientName(e.target.value))
    }

    const addNewClientHandler = async () => {
        const clientId = await dashboardServices.addNewClient(clientName)
        dispatch(dashboardActions.toggleAddNewClient())
    }

    const dashboardHandlers = {
        toggleAddNewClientHandler,
        updateClientNameHandler,
        addNewClientHandler
    }

    return dashboardHandlers
}

export default DashboardHandlers