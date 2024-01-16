import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const DashboardServices = () => {

    const globalState = useSelector(prevState => prevState.global)

    const addNewClient = async (clientName) => {

        try {
            const response = await axios.post(globalState.servers.main + "/clients/add?clientName=" + clientName, {}, {
                withCredentials: true
            })
            const clientData = response.data.data
            // toast.success("Client Created")
            return clientData;
        } catch (error) {
            toast.error("Client Creation Failed : " + (error.response === undefined ? "Network Error" : error.response))
            return null;
        }

    }

    const getAllClients = async () => {

        try {
            const response = await axios.get(globalState.servers.main + "/clients/getAll", {
                withCredentials: true
            })
            const clients = response.data.data
            // toast.success("All Clients Fetched")
            return clients;
        } catch (error) {
            toast.error("Clients Fetching Failed : " + (error.response === undefined ? "Network Error" : error.response))
            return null;
        }

    }

    const deleteClient = async (clientId) => {

        try {
            await axios.delete(globalState.servers.main + "/clients/delete?clientId=" + clientId, {
                withCredentials: true
            })
            // toast.success("Client Deleted")
            return true;
        } catch (error) {
            toast.error("Client Deletion Failed" + (error.response === undefined ? "Network Error" : error.response))
            return null;
        }

    }

    const getClient = async (clientId) => {
        try {
            const response = await axios.get(globalState.servers.main + "/clients/get?clientId=" + clientId, {
                withCredentials: true
            })
            // toast.success("Client Deleted")
            return response.data.data;
        } catch (error) {
            toast.error("Client Fetching Failed" + (error.response === undefined ? "Network Error" : error.response))
            return null;
        }
    }

    const viewClientJSON = async (clientId) => {
        try {
            const response = await axios.get(globalState.servers.main + "/clients/view-json?clientId=" + clientId, {
                withCredentials: true
            })
            // toast.success("Client Deleted")
            return response.data;
        } catch (error) {
            toast.error("Client JSON Fetching Failed" + (error.response === undefined ? "Network Error" : error.response))
            return null;
        }
    }

    const downloadClientJSONURLForAncor = (clientId) => {
        return globalState.servers.main + "/clients/generate-json?clientId=" + clientId
    }

    const dashboardServices = {
        addNewClient,
        getAllClients,
        deleteClient,
        getClient,
        viewClientJSON,
        downloadClientJSONURLForAncor
    }

    return dashboardServices

}

export default DashboardServices