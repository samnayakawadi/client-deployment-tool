import { Route, Routes } from "react-router"
import ServicesSelector from "../selector/ServicesSelector"
import Services from "../tabs/services/Services"
import Uploads from "../tabs/services/Uploads"

const ServicesManager = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-2">
                <ServicesSelector />
            </div>
            <div className="flex-grow p-3 border border-gray-700 mx-2">
                <Routes>
                    <Route path="services" element={<Services />} />
                    <Route path="uploads" element={<Uploads />} />
                </Routes>
            </div>
        </div>
    )
}

export default ServicesManager