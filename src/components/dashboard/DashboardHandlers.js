import { useDispatch, useSelector } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"
import DashboardServices from "./DashboardServices"
import { toast } from "react-toastify"

const DashboardHandlers = () => {

    const dispatch = useDispatch()
    const dashboardServices = DashboardServices()
    const clientName = useSelector(prevState => prevState.dashboard.modals.addNewClient.clientName)
    const allClients = useSelector(prevState => prevState.dashboard.clientsList)
    // const deleteClientId = useSelector(prevState => prevState.dashboard.deleteClient.clientId)

    const toggleAddNewClientHandler = () => {
        dispatch(dashboardActions.toggleAddNewClient())
    }

    const updateClientNameHandler = (e) => {
        dispatch(dashboardActions.updateClientName(e.target.value))
    }

    const addNewClientHandler = async () => {
        const clientData = await dashboardServices.addNewClient(clientName)
        dispatch(dashboardActions.toggleAddNewClient())
        dispatch(dashboardActions.pushClientToAllClients(clientData))
    }

    const getAllClientsHandler = async () => {
        const allClients = await dashboardServices.getAllClients()

        if (allClients !== null) {
            dispatch(dashboardActions.storeAllClients(allClients))
        } else {
            dispatch(dashboardActions.storeAllClients([]))
        }
    }

    const deleteClientHandler = async () => {
        // console.log("allClients[clientIndex]", allClients[clientIndex])

        await dashboardServices.deleteClient(clientIndex)
        dispatch(dashboardActions.deleteClientFromAllClients(clientIndex))
        toggleDeleteClientHandler(null)
    }

    const toggleDeleteClientHandler = (clientId) => {
        console.log("inside toggleDeleteClientHandler")
        dispatch(dashboardActions.toggleDeleteClient(clientId))
    }

    const dashboardHandlers = {
        toggleAddNewClientHandler,
        updateClientNameHandler,
        addNewClientHandler,
        getAllClientsHandler,
        deleteClientHandler,
        toggleDeleteClientHandler
    }

    return dashboardHandlers
}

export default DashboardHandlers