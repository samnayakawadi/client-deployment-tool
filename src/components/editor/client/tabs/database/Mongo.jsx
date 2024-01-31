import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"

const Mongo = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "database", selectedTab: "mongo" }))
    }, [])

    return (
        <div>Mongo</div>
    )
}

export default Mongo