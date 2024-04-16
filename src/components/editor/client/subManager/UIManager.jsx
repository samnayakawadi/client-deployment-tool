import { Route, Routes } from "react-router"
import UISelector from "../selector/UISelector"
import General from "../tabs/ui/General"
import Home from "../tabs/ui/Home"
import Services from "../tabs/ui/Services"
import Keycloak from "../tabs/ui/Keycloak"
import { useEffect } from "react"
import MenuHandlers from "../menu/MenuHandlers"
import Options from "../tabs/ui/Options"

const UIManager = () => {

    const menuHandlers = MenuHandlers()

    useEffect(() => {
        menuHandlers.updateMenuHandler("ui")
    }, [])

    return (
        <div className="flex flex-col h-full">
            <div className="p-2">
                <UISelector />
            </div>
            <div className="flex-grow p-3 border border-gray-700 mx-2">
                <Routes>
                    <Route path="general" element={<General />} />
                    <Route path="home" element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="options" element={<Options />} />
                    <Route path="keycloak" element={<Keycloak />} />
                </Routes>
            </div>
        </div>
    )
}

export default UIManager