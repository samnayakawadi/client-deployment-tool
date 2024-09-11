import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"

const ServicesHandlers = () => {

    const dispatch = useDispatch()

    const updateServicesTab = (e) => {
        dispatch(clientActions.updateServicesServicesTab(e.target))
    }

    const updateUploadsTab = (e) => {
        dispatch(clientActions.updateServicesUploadsTab(e.target))
    }

    const updateOptionsTab = (e) => {
        dispatch(clientActions.updateServicesOptionsTab(e.target))
    }

    const updateKeycloakTab = (e) => {
        dispatch(clientActions.updateServicesKeycloakTab(e.target))
    }

    const servicesHandlers = {
        updateServicesTab,
        updateUploadsTab,
        updateKeycloakTab,
        updateOptionsTab
    }

    return servicesHandlers

}

export default ServicesHandlers