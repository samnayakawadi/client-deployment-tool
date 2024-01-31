import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import ClientHandlers from "../../ClientHandlers"

const Keycloak = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const keycloak = clientEditorState.data.ui.keycloak

    const dispatch = useDispatch()

    const clientHandlers = ClientHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "ui", selectedTab: "keycloak" }))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Realm
                </div>
                <div className="basis-9/12">
                    <input type="text" name="realm" value={keycloak.realm} onChange={clientHandlers.updateKeycloakTab} placeholder="E.g. ngel" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Resource
                </div>
                <div className="basis-9/12">
                    <input type="text" name="resource" value={keycloak.resource} onChange={clientHandlers.updateKeycloakTab} placeholder="E.g. reactclient" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Server URL
                </div>
                <div className="basis-9/12">
                    <input type="text" name="serverUrl" value={keycloak.serverUrl} onChange={clientHandlers.updateKeycloakTab} placeholder="E.g. http://10.244.2.206:8080 or http://megh1.hyderabad.cdac.in" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Keycloak