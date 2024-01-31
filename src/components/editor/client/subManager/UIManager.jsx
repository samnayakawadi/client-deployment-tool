import { Route, Routes } from "react-router"
import Selector from "../selector/UISelector"
import General from "../tabs/ui/General"
import Home from "../tabs/ui/Home"
import Services from "../tabs/ui/Services"
import Time from "../tabs/ui/Time"
import Keycloak from "../tabs/ui/Keycloak"

const UIManager = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-2">
                <Selector />
            </div>
            <div className="flex-grow p-3 border border-gray-700 mx-2">
                <Routes>
                    <Route path="general" element={<General />} />
                    <Route path="home" element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="time" element={<Time />} />
                    <Route path="keycloak" element={<Keycloak />} />
                </Routes>
            </div>
        </div>
    )
}

export default UIManager