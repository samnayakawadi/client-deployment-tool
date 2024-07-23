import { useDispatch, useSelector } from "react-redux"
import { dashboardActions } from "./redux/DashboardSlice"
import { clientActions } from "../editor/client/redux/ClientSlice"
import DashboardServices from "./DashboardServices"
import copy from "copy-to-clipboard"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const DashboardHandlers = () => {

    const dispatch = useDispatch()
    const dashboardServices = DashboardServices()

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const globalState = useSelector(prevState => prevState.global)
    const clientEditor = useSelector(prevState => prevState.clientEditor)

    const clientName = dashboardState.modals.addNewClient.clientName
    const deleteClient = dashboardState.modals.deleteClient
    const clientIdFromDownloadModal = dashboardState.modals.downloadClient.clientId

    const navigate = useNavigate()

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
        dispatch(dashboardActions.isLoadingClients(true))
        const allClients = await dashboardServices.getAllClients()

        if (allClients !== null) {
            dispatch(dashboardActions.storeAllClients(allClients))
        } else {
            dispatch(dashboardActions.storeAllClients([]))
        }
        dispatch(dashboardActions.isLoadingClients(false))
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

    const toggleViewClientHandler = (value) => {
        dispatch(dashboardActions.toggleViewClient(value))
    }

    const getClientJSONHandler = async (clientId = null) => {
        const data = await dashboardServices.viewClientJSON(clientId)
        dispatch(dashboardActions.viewClientJSON(data))
        toggleViewClientHandler(true)
    }

    const getClientPropertiesHandler = async (clientId = null) => {
        const data = await dashboardServices.viewClientProperties(clientId)
        dispatch(dashboardActions.viewClientProperties(data))
        toggleViewClientHandler(true)
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
                // return `Invoke-WebRequest -Uri "${mainServer}/clients/generate-json?clientId=${clientId}" -OutFile "C:\/data.json"`
                return `Invoke-WebRequest -Uri "${mainServer}/clients/generate-json?clientId=${clientId}" -OutFile "C:/data.json"`
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

    const downloadClientPropertiesURLGenerator = () => {
        return dashboardServices.downloadClientPropertiesURLForAncor(clientIdFromDownloadModal)
    }

    const navigateToClientEditor = async (clientId) => {
        const clientData = await dashboardServices.getClient(clientId)
        dispatch(clientActions.updateData(clientData))
        dispatch(clientActions.showEditor())
        navigate(`/editor/${clientEditor.menu}/${clientEditor.selectedTabs[clientEditor.menu]}`)
    }

    const updateViewClientTab = (newTab = "json") => {
        dispatch(dashboardActions.updateViewClientTab(newTab))
    }

    const copyDataHandler = () => {
        const selectedTab = dashboardState.modals.viewClient.tab

        const json = dashboardState.modals.viewClient.json
        const properties = dashboardState.modals.viewClient.properties

        if (selectedTab === "json" && json != null) {
            const jsonString = JSON.stringify(json, null, 2)
            copy(jsonString)
            toast.success("JSON Copied")
        }
        else if (selectedTab === "properties" && properties != null) {
            copy(properties)
            toast.success("Properties Copied")
        }
        else {
            toast.error("Copying Data Failed")
        }
    }

    const updateCurrentBranchHandler = (e) => {
        dispatch(dashboardActions.updateCurrentBranch(e.target.value))
    }

    const toggleTroubleshootModalHandler = () => {
        dispatch(dashboardActions.toggleTroubleshootModal())
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
        downloadClientJSONURLGenerator,
        navigateToClientEditor,
        updateViewClientTab,
        getClientPropertiesHandler,
        downloadClientPropertiesURLGenerator,
        copyDataHandler,
        updateCurrentBranchHandler,
        toggleTroubleshootModalHandler
    }

    return dashboardHandlers
}

export default DashboardHandlers