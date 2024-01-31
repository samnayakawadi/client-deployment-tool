import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const UISelector = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const selectedTab = clientEditorState.selectedTabs.ui

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed border border-gray-700">
                <Link to="/editor/ui/general" className={`tab ${selectedTab === "general" && "tab-active"}`}>General</Link>
                <Link to="/editor/ui/home" className={`tab ${selectedTab === "home" && "tab-active"}`}>Home</Link>
                <Link to="/editor/ui/services" className={`tab ${selectedTab === "services" && "tab-active"}`}>Services</Link>
                <Link to="/editor/ui/time" className={`tab ${selectedTab === "time" && "tab-active"}`}>Time</Link>
                <Link to="/editor/ui/keycloak" className={`tab ${selectedTab === "keycloak" && "tab-active"}`}>Keycloak</Link>
            </div>
        </div>
    )
}

export default UISelector