import axios from "axios"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const ClientServices = () => {
    const globalState = useSelector(prevState => prevState.global)
    const autoClose = globalState.time.autoClose

    const updateClient = async (clientId, data) => {

        toast.dismiss()
        const toastId = toast.loading("Updating Client")

        try {
            const response = await axios.put(globalState.servers.main + "/clients/update?clientId=" + clientId, data, {
                withCredentials: true
            })
            toast.update(toastId, { render: "Client Updated", type: "success", isLoading: false, autoClose: autoClose, closeOnClick: true })
            const clientData = response.data.data
            return clientData;
        } catch (error) {
            toast.update(toastId, { render: "Client Updation Failed : " + (error.response === undefined ? "Network Error" : error.response), type: "error", isLoading: false, autoClose: autoClose, closeOnClick: true })
            return null;
        }

    }

    const clientServices = {
        updateClient
    }

    return clientServices

}

export default ClientServices