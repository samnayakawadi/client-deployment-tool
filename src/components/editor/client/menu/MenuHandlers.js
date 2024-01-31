import { useDispatch } from "react-redux"
import { clientActions } from "../redux/ClientSlice"

const MenuHandlers = () => {

    const dispatch = useDispatch()

    const updateMenuHandler = (newTab) => {
        dispatch(clientActions.updateMenuTab(newTab))
    }

    const menuHandlers = {
        updateMenuHandler
    }

    return menuHandlers
}

export default MenuHandlers