import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../redux/ClientSlice"

const Keycloak = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const keycloak = clientEditorState.data.keycloak

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab("keycloak"))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Realm
                </div>
                <div className="basis-9/12">
                    <input type="text" name="realm" value={keycloak.realm} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Resource
                </div>
                <div className="basis-9/12">
                    <input type="text" name="resource" value={keycloak.resource} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Server URL
                </div>
                <div className="basis-9/12">
                    <input type="text" name="serverUrl" value={keycloak.serverUrl} placeholder="Type here" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Keycloak