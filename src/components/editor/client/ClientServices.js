import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const ClientServices = () => {
    const globalState = useSelector(prevState => prevState.global)

    const updateClient = async (clientId, data) => {

        try {
            const response = await axios.put(globalState.servers.main + "/clients/update?clientId=" + clientId, data, {
                withCredentials: true
            })
            const clientData = response.data.data
            toast.success("Client Updated")
            return clientData;
        } catch (error) {
            toast.error("Client Updation Failed : " + (error.response === undefined ? "Network Error" : error.response))
            return null;
        }

    }

    const clientServices = {
        updateClient
    }

    return clientServices

}

export default ClientServices