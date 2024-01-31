import { Route, Routes, useNavigate } from "react-router"
import Buttons from "./Buttons"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Menu } from "./menu/Menu"
import UIManager from "./subManager/UIManager"
import ServicesManager from "./subManager/ServicesManager"
import DatabaseManager from "./subManager/DatabaseManager"

const Manager = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const showEditor = clientEditorState.showEditor
    const navigate = useNavigate()

    useEffect(() => {
        if (!showEditor) {
            navigate("/")
        }
    })

    return (
        <div className="flex flex-col h-full">
            <div className="p-2">
                <Buttons />
            </div>
            <div className="px-2">
                <div role="alert" className="alert rounded-none p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Note : Do not add "/" at the end of any URLs.</span>
                </div>
            </div>
            <div className="p-2 pb-0">
                <Menu />
            </div>
            <div className="h-full">
                <Routes>
                    <Route path="ui/*" element={<UIManager />} />
                    <Route path="services/*" element={<ServicesManager />} />
                    <Route path="database/*" element={<DatabaseManager />} />
                </Routes>
            </div>
        </div>
    )
}

export default Manager