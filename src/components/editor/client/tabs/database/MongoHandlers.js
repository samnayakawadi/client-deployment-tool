import { useDispatch } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"

const MongoHandlers = () => {
    const dispatch = useDispatch()

    const updateMongoTab = (e) => {
        dispatch(clientActions.updateDatabaseMongoTab(e.target))
    }

    const mongoHandlers = {
        updateMongoTab,
    }

    return mongoHandlers
}

export default MongoHandlers