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
            toast.success("Client Created")
            return clientData;
        } catch (error) {
            toast.error("Client Creation Failed" + error.response)
            return null;
        }

    }

    const getAllClients = async () => {

        try {
            const response = await axios.get(globalState.servers.main + "/clients/getAll", {
                withCredentials: true
            })
            const clients = response.data.data
            toast.success("All Clients Fetched")
            return clients;
        } catch (error) {
            toast.error("Clients Fetching Failed" + error.response)
            return null;
        }

    }

    const dashboardServices = {
        addNewClient,
        getAllClients
    }

    return dashboardServices

}

export default DashboardServices