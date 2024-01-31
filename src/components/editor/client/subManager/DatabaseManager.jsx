import { Route, Routes } from "react-router"
import DatabaseSelector from "../selector/DatabaseSelector"
import Mongo from "../tabs/database/Mongo"
import SQL from "../tabs/database/SQL"

const DatabaseManager = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-2">
                <DatabaseSelector />
            </div>
            <div className="flex-grow p-3 border border-gray-700 mx-2">
                <Routes>
                    <Route path="mongo" element={<Mongo />} />
                    <Route path="sql" element={<SQL />} />
                </Routes>
            </div>
        </div>
    )
}

export default DatabaseManager