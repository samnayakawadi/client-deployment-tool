import { useDispatch, useSelector } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"
import DashboardServices from "./DashboardServices"
import copy from "copy-to-clipboard"
import { toast } from "react-toastify"

const DashboardHandlers = () => {

    const dispatch = useDispatch()
    const dashboardServices = DashboardServices()

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const globalState = useSelector(prevState => prevState.global)

    const clientName = dashboardState.modals.addNewClient.clientName
    const deleteClient = dashboardState.modals.deleteClient
    const clientIdFromDownloadModal = dashboardState.modals.downloadClient.clientId

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

    const toggleDeleteClientHandler = (clientId = null, clientIndex = null) => {
        dispatch(dashboardActions.toggleDeleteClient({
            clientId,
            clientIndex
        }))
    }

    const toggleViewClientHandler = () => {
        dispatch(dashboardActions.toggleViewClient())
    }

    const getClientJSONHandler = async (clientId = null) => {
        const data = await dashboardServices.viewClientJSON(clientId)
        dispatch(dashboardActions.viewClientJSON(data))
    }

    const toggleDownloadClientHandler = (clientId = null) => {
        dispatch(dashboardActions.toggleDownloadClient(clientId))
    }

    const selectDownloadClientTabHandler = (newTab) => {
        dispatch(dashboardActions.selectDownloadTab(newTab))
    }

    const getGenerateJSONCommandHandler = (os = "linux", type = "command") => {

        const mainServer = globalState.servers.main
        const clientId = dashboardState.modals.downloadClient.clientId

        if (os === "linux") {
            return `curl -o /var/www/data.json ${mainServer}/clients/generate-json?clientId=${clientId}`
        } else if (os === "windows") {
            if (type === "command") {
                return `Invoke-WebRequest -Uri "${mainServer}/clients/generate-json?clientId=${clientId}" -OutFile "C:/data.json"`
            } else if (type === "text") {
                return `Invoke-WebRequest -Uri "${mainServer}/clients/generate-json?clientId=${clientId}" -OutFile "C:\/data.json"`
            }
        }
    }

    const copyCommandHandler = (os = "linux") => {
        copy(getGenerateJSONCommandHandler(os, "command"))
        toast.success("Command Copied")
        toggleDownloadClientHandler()
    }

    const downloadClientJSONURLGenerator = () => {
        return dashboardServices.downloadClientJSONURLForAncor(clientIdFromDownloadModal)
    }

    const dashboardHandlers = {
        toggleAddNewClientHandler,
        updateClientNameHandler,
        addNewClientHandler,
        getAllClientsHandler,
        deleteClientHandler,
        toggleDeleteClientHandler,
        toggleViewClientHandler,
        getClientJSONHandler,
        toggleDownloadClientHandler,
        selectDownloadClientTabHandler,
        getGenerateJSONCommandHandler,
        copyCommandHandler,
        downloadClientJSONURLGenerator
    }

    return dashboardHandlers
}

export default DashboardHandlers