import { useDispatch, useSelector } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"
import DashboardServices from "./DashboardServices"

const DashboardHandlers = () => {

    const dispatch = useDispatch()
    const dashboardServices = DashboardServices()
    const clientName = useSelector(prevState => prevState.dashboard.modals.addNewClient.clientName)
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
        if (clientData !== null) {
            dispatch(dashboardActions.pushClientToAllClients(clientData))
        }
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

    const toggleViewClientHandler = () => {
        dispatch(dashboardActions.toggleViewClient())
    }

    const getClientJSONHandler = async (clientId) => {
        const data = await dashboardServices.getClient(clientId)
        dispatch(dashboardActions.viewClientJSON(data))
    }

    const dashboardHandlers = {
        toggleAddNewClientHandler,
        updateClientNameHandler,
        addNewClientHandler,
        getAllClientsHandler,
        deleteClientHandler,
        toggleDeleteClientHandler,
        toggleViewClientHandler,
        getClientJSONHandler
    }

    return dashboardHandlers
}

export default DashboardHandlers