import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"

const Services = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "services", selectedTab: "services" }))
    }, [])

    return (
        <div>Services</div>
    )
}

export default Services