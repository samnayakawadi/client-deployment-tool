import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import ClientServices from "../../ClientServices"

const UIHandlers = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const data = clientEditorState.data
    const clientServices = ClientServices()

    const dispatch = useDispatch()

    const updateGeneralTab = (e) => {
        dispatch(clientActions.updateUIGeneralTab(e.target.value))
    }

    const updateServicesTab = (e) => {
        dispatch(clientActions.updateUIServicesTab(e.target))
    }

    const updateHomeTab = (e) => {
        dispatch(clientActions.updateUIHomeTab(e.target))
    }

    const updateTimeTab = (e) => {
        dispatch(clientActions.updateUITimeTab(e.target))
    }

    const updateKeycloakTab = (e) => {
        dispatch(clientActions.updateUIKeycloakTab(e.target))
    }

    const updateClientHandler = async () => {
        await clientServices.updateClient(data._id, data)
    }

    const uiHandlers = {
        updateGeneralTab,
        updateServicesTab,
        updateClientHandler,
        updateHomeTab,
        updateTimeTab,
        updateKeycloakTab
    }

    return uiHandlers

}

export default UIHandlers