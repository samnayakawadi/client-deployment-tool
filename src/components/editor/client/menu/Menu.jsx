import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Menu = () => {

    const clientState = useSelector(prevState => prevState.clientEditor)
    const menu = clientState.menu
    const selectedTabs = clientState.selectedTabs

    return (
        <div role="tablist" className="tabs tabs-boxed border border-gray-700">
            <Link to={`/editor/ui/${selectedTabs.ui}`} role="tab" className={`tab ${menu === "ui" && "tab-active"}`}>User Interface</Link>
            <Link to={`/editor/services/${selectedTabs.services}`} role="tab" className={`tab ${menu === "services" && "tab-active"}`}>Services</Link>
            <Link to={`/editor/database/${selectedTabs.database}`} role="tab" className={`tab ${menu === "database" && "tab-active"}`}>Database</Link>
        </div>
    )
}
