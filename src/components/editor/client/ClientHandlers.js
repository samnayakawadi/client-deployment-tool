import { useDispatch } from "react-redux"
import { clientActions } from "./redux/ClientSlice"

const ClientHandlers = () => {

    const dispatch = useDispatch()

    const updateGeneralTab = (e) => {
        dispatch(clientActions.updateGeneralTab(e.target.value))
    }

    const updateServicesTab = (e) => {
        dispatch(clientActions.updateServicesTab(e.target))
    }

    const clientHandlers = {
        updateGeneralTab,
        updateServicesTab
    }

    return clientHandlers

}

export default ClientHandlers