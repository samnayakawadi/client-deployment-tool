import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"

const SQL = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "database", selectedTab: "sql" }))
    }, [])

    return (
        <div>SQL</div>
    )
}

export default SQL