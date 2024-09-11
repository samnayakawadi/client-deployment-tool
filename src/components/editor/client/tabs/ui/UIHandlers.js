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

    const updateOptionsTab = (e) => {
        dispatch(clientActions.updateUIOptionsTab(e.target))
    }

    const updateKeycloakTab = (e) => {
        dispatch(clientActions.updateUIKeycloakTab(e.target))
    }

    const updateClientHandler = async () => {
        await clientServices.updateClient(data._id, data)
    }

    const updateBrandingHandler = (e) => {
        dispatch(clientActions.updateUIBrandingTab(e.target))
    }

    const uiHandlers = {
        updateGeneralTab,
        updateServicesTab,
        updateClientHandler,
        updateHomeTab,
        updateOptionsTab,
        updateKeycloakTab,
        updateBrandingHandler
    }

    return uiHandlers

}

export default UIHandlers