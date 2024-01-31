import { useSelector } from "react-redux"
import MenuHandlers from "./MenuHandlers"
import { Link } from "react-router-dom"

export const Menu = () => {

    const menuHandlers = MenuHandlers()
    const clientState = useSelector(prevState => prevState.clientEditor)
    const menu = clientState.menu

    return (
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
            <Link to="/editor/ui/general" role="tab" className={`tab ${menu === "ui" && "tab-active"}`} onClick={() => { menuHandlers.updateMenuHandler("ui") }}>User Interface</Link>
            <Link to="/editor/services" role="tab" className={`tab ${menu === "services" && "tab-active"}`} onClick={() => { menuHandlers.updateMenuHandler("services") }}>Services</Link>
            <Link to="/editor/database" role="tab" className={`tab ${menu === "database" && "tab-active"}`} onClick={() => { menuHandlers.updateMenuHandler("database") }}>Database</Link>
        </div>
    )
}
