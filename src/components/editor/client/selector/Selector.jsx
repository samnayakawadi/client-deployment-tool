import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Selector = () => {

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const selectedTab = clientEditorState.selectedTab

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed">
                <Link to="general" className={`tab ${selectedTab === "general" && "tab-active"}`}>General</Link>
                <Link to="ui" className={`tab ${selectedTab === "ui" && "tab-active"}`}>User Interface</Link>
                <Link to="services" className={`tab ${selectedTab === "services" && "tab-active"}`}>Services</Link>
                <Link to="time" className={`tab ${selectedTab === "time" && "tab-active"}`}>Time</Link>
                <Link to="keycloak" className={`tab ${selectedTab === "keycloak" && "tab-active"}`}>Keycloak</Link>
            </div>
        </div>
    )
}

export default Selector