import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "./redux/ClientSlice"
import ClientServices from "./ClientServices"

const ClientHandlers = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const data = clientEditorState.data
    const clientServices = ClientServices()

    const dispatch = useDispatch()

    const updateGeneralTab = (e) => {
        dispatch(clientActions.updateGeneralTab(e.target.value))
    }

    const updateServicesTab = (e) => {
        dispatch(clientActions.updateServicesTab(e.target))
    }

    const updateUITab = (e) => {
        dispatch(clientActions.updateUITab(e.target))
    }

    const updateTimeTab = (e) => {
        dispatch(clientActions.updateTimeTab(e.target))
    }

    const updateKeycloakTab = (e) => {
        dispatch(clientActions.updateKeycloakTab(e.target))
    }

    const updateClientHandler = async () => {
        await clientServices.updateClient(data._id, data)
    }

    const clientHandlers = {
        updateGeneralTab,
        updateServicesTab,
        updateClientHandler,
        updateUITab,
        updateTimeTab,
        updateKeycloakTab
    }

    return clientHandlers

}

export default ClientHandlers