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
            const clientId = response.data.data.clientId
            toast.success("Client Created")
            return clientId;
        } catch (error) {
            toast.error("Client Creation Failed" + error.response)
            return null;
        }

    }

    const dashboardServices = {
        addNewClient
    }

    return dashboardServices

}

export default DashboardServices