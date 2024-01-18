import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SelectorHandlers from "./SelectorHandlers"

const Selector = () => {

    const selectorHandlers = SelectorHandlers()

    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const selectedTab = clientEditorState.selectedTab

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed">
                <Link to="general" className={`tab ${selectedTab === "general" && "tab-active"}`} onClick={() => { selectorHandlers.selectTabHandler("general") }}>General</Link>
                <Link to="ui" className={`tab ${selectedTab === "ui" && "tab-active"}`} onClick={() => { selectorHandlers.selectTabHandler("ui") }}>User Interface</Link>
                <Link to="services" className={`tab ${selectedTab === "services" && "tab-active"}`} onClick={() => { selectorHandlers.selectTabHandler("services") }}>Services</Link>
                <Link to="time" className={`tab ${selectedTab === "time" && "tab-active"}`} onClick={() => { selectorHandlers.selectTabHandler("time") }}>Time</Link>
                <Link to="keycloak" className={`tab ${selectedTab === "keycloak" && "tab-active"}`} onClick={() => { selectorHandlers.selectTabHandler("keycloak") }}>Keycloak</Link>
            </div>
        </div>
    )
}

export default Selector