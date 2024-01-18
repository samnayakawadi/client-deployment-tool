import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../redux/ClientSlice"

const SelectorHandlers = () => {

    const dispatch = useDispatch()
    const clientEditorState = useSelector(prevState => prevState.clientEditor)

    const selectedTab = clientEditorState.selectedTab

    const selectTabHandler = (newTab) => {
        if (selectedTab !== newTab) {
            dispatch(clientActions.updateSelectedTab(newTab))
        }
    }

    const selectorHandlers = {
        selectTabHandler
    }

    return selectorHandlers

}

export default SelectorHandlers