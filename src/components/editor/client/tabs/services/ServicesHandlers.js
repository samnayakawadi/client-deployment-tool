import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"

const ServicesHandlers = () => {

    const dispatch = useDispatch()

    const updateServicesTab = (e) => {
        dispatch(clientActions.updateServicesServicesTab(e.target))
    }

    const updateUploadsTab = (e) => {
        dispatch(clientActions.updateUploadsTab(e.target))
    }

    const servicesHandlers = {
        updateServicesTab,
        updateUploadsTab
    }

    return servicesHandlers

}

export default ServicesHandlers