import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const DashboardServices = () => {

    const globalState = useSelector(prevState => prevState.global)
    const autoClose = globalState.options.autoClose

    const addNewClient = async (clientName) => {
        toast.dismiss()
        const toastId = toast.loading("Adding New Client")
        try {
            const response = await axios.post(globalState.servers.main + "/clients/add?clientName=" + clientName, {}, {
                withCredentials: true
            })
            const clientData = response.data.data
            toast.update(toastId, { render: "Client Created", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return clientData;
        } catch (error) {
            toast.update(toastId, { render: "Client Creation Failed : " + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }
    }

    const getAllClients = async () => {
        toast.dismiss()
        const toastId = toast.loading("Fetching Clients")
        try {
            const response = await axios.get(globalState.servers.main + "/clients/getAll", {
                withCredentials: true
            })
            const clients = response.data.data
            toast.update(toastId, { render: "Clients Fetched", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return clients;
        } catch (error) {
            toast.update(toastId, { render: "Clients Fetching Failed : " + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }

    }

    const deleteClient = async (clientId) => {
        toast.dismiss()
        const toastId = toast.loading("Deleting Client")
        try {
            await axios.delete(globalState.servers.main + "/clients/delete?clientId=" + clientId, {
                withCredentials: true
            })
            toast.update(toastId, { render: "Client Deleted", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return true;
        } catch (error) {
            toast.update(toastId, { render: "Client Deletion Failed" + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }

    }

    const getClient = async (clientId) => {
        toast.dismiss()
        const toastId = toast.loading("Fetching Client")
        try {
            const response = await axios.get(globalState.servers.main + "/clients/get?clientId=" + clientId, {
                withCredentials: true
            })
            toast.update(toastId, { render: "Client Fetched", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return response.data.data;
        } catch (error) {
            toast.update(toastId, { render: "Client Fetching Failed" + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }
    }

    const viewClientJSON = async (clientId) => {
        toast.dismiss()
        const toastId = toast.loading("Fetching Data.json")
        try {
            const response = await axios.get(globalState.servers.main + "/clients/view-json?clientId=" + clientId, {
                withCredentials: true
            })
            toast.update(toastId, { render: "Data.json Fetched", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return response.data;
        } catch (error) {
            toast.update(toastId, { render: "Data.json Fetching Failed" + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }
    }

    const viewClientProperties = async (clientId) => {
        // toast.dismiss()
        const toastId = toast.loading("Fetching Data.properties")
        try {
            const response = await axios.get(globalState.servers.main + "/clients/generate-properties?clientId=" + clientId, {
                withCredentials: true
            })
            toast.update(toastId, { render: "Data.properties Fetched", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return response.data;
        } catch (error) {
            toast.update(toastId, { render: "Data.properties Fetching Failed" + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }
    }

    const downloadClientJSONURLForAncor = (clientId) => {
        return globalState.servers.main + "/clients/generate-json?clientId=" + clientId
    }

    const downloadClientPropertiesURLForAncor = (clientId) => {
        return globalState.servers.main + "/clients/generate-properties?clientId=" + clientId
    }

    const dashboardServices = {
        addNewClient,
        getAllClients,
        deleteClient,
        getClient,
        viewClientJSON,
        downloadClientJSONURLForAncor,
        viewClientProperties,
        downloadClientPropertiesURLForAncor
    }

    return dashboardServices

}

export default DashboardServices