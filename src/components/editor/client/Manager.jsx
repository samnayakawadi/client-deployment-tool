import { Route, Routes } from "react-router"
import General from "./tabs/General"
import UI from "./tabs/UI"
import Services from "./tabs/Services"
import Time from "./tabs/Time"
import Keycloak from "./tabs/Keycloak"
import Selector from "./selector/Selector"

const Manager = () => {
    return (
        <div className="flex flex-col h-full gap-2">
            <Selector />
            <div className="border flex-grow p-2">
                <Routes>
                    <Route path="/general" element={<General />} />
                    <Route path="/ui" element={<UI />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/time" element={<Time />} />
                    <Route path="/keycloak" element={<Keycloak />} />
                </Routes>
            </div>
        </div>
    )
}

export default Manager