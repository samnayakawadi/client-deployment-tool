import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"
import MongoHandlers from "./MongoHandlers"

const Mongo = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "database", selectedTab: "mongo" }))
    }, [])

    const mongoHandlers = MongoHandlers()

    const clientEditor = useSelector(prevState => prevState.clientEditor)
    const mongo = clientEditor.data.database.mongo

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Authentication Database
                </div>
                <div className="basis-9/12">
                    <input type="text" name="authenticationDatabase" value={mongo.authenticationDatabase} onChange={mongoHandlers.updateMongoTab} placeholder="E.g. admin" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Username
                </div>
                <div className="basis-9/12">
                    <input type="text" name="username" value={mongo.username} onChange={mongoHandlers.updateMongoTab} placeholder="E.g. cdac" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Password
                </div>
                <div className="basis-9/12">
                    <input type="text" name="password" value={mongo.password} onChange={mongoHandlers.updateMongoTab} placeholder="E.g. cdac****" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Host
                </div>
                <div className="basis-9/12">
                    <input type="text" name="host" value={mongo.host} onChange={mongoHandlers.updateMongoTab} placeholder="E.g. 10.244.2.206 or megh3.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Mongo