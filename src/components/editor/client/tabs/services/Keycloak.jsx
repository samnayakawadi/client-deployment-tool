import { useDispatch, useSelector } from "react-redux"
import { clientActions } from "../../redux/ClientSlice"
import { useEffect } from "react"
import ServicesHandlers from "./ServicesHandlers"

const Keycloak = () => {
    const dispatch = useDispatch()

    const clientEditor = useSelector(prevState => prevState.clientEditor)
    const keycloak = clientEditor.data.services.keycloak

    const servicesHandlers = ServicesHandlers()

    useEffect(() => {
        dispatch(clientActions.updateSelectedTab({ menu: "services", selectedTab: "keycloak" }))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Realm
                </div>
                <div className="basis-9/12">
                    <input type="text" name="realm" value={keycloak.realm} onChange={servicesHandlers.updateKeycloakTab} placeholder="E.g. cakes" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Resource
                </div>
                <div className="basis-9/12">
                    <input type="text" name="resource" value={keycloak.resource} onChange={servicesHandlers.updateKeycloakTab} placeholder="E.g. cakeldap" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
                <div className="basis-3/12 text-center">
                    Server Url
                </div>
                <div className="basis-9/12">
                    <input type="text" name="serverUrl" value={keycloak.serverUrl} onChange={servicesHandlers.updateKeycloakTab} placeholder="E.g. http://10.244.2.206:8080 or http://megh2.hyderabad.cdac.in:8080" className="input input-bordered input-secondary w-full focus:outline-none" />
                </div>
            </div>

        </div>
    )
}

export default Keycloak