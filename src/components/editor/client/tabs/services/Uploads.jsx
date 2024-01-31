import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"

const Uploads = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "services", selectedTab: "uploads" }))
    }, [])

    return (
        <div>Uploads</div>
    )
}

export default Uploads