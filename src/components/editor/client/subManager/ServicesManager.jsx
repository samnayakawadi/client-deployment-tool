import { Route, Routes } from "react-router"
import ServicesSelector from "../selector/ServicesSelector"
import Services from "../tabs/services/Services"
import Uploads from "../tabs/services/Uploads"
import MenuHandlers from "../menu/MenuHandlers"
import { useEffect } from "react"
import Keycloak from "../tabs/services/Keycloak"

const ServicesManager = () => {

    const menuHandlers = MenuHandlers()

    useEffect(() => {
        menuHandlers.updateMenuHandler("services")
    }, [])

    return (
        <div className="flex flex-col h-full">
            <div className="p-2">
                <ServicesSelector />
            </div>
            <div className="flex-grow p-3 border border-gray-700 mx-2">
                <Routes>
                    <Route path="services" element={<Services />} />
                    <Route path="uploads" element={<Uploads />} />
                    <Route path="keycloak" element={<Keycloak />} />
                </Routes>
            </div>
        </div>
    )
}

export default ServicesManager