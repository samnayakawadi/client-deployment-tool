import { useDispatch, useSelector } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"
import DashboardServices from "./DashboardServices"

const DashboardHandlers = () => {

    const dispatch = useDispatch()
    const dashboardServices = DashboardServices()
    const clientName = useSelector(prevState => prevState.dashboard.modals.addNewClient.clientName)
    const allClients = useSelector(prevState => prevState.dashboard.clientsList)
    const deleteClient = useSelector(prevState => prevState.dashboard.modals.deleteClient)

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
        await dashboardServices.deleteClient(deleteClient.clientId)
        dispatch(dashboardActions.deleteClientFromAllClients(deleteClient.clientIndex))
        toggleDeleteClientHandler(null, null)
    }

    const toggleDeleteClientHandler = (clientId, clientIndex) => {
        dispatch(dashboardActions.toggleDeleteClient({
            clientId,
            clientIndex
        }))
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