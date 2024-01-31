import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ServicesSelector = () => {
    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const selectedTab = clientEditorState.selectedTabs.services

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed border border-gray-700">
                <Link to="/editor/services/services" className={`tab ${selectedTab === "services" && "tab-active"}`}>Services</Link>
                <Link to="/editor/services/uploads" className={`tab ${selectedTab === "uploads" && "tab-active"}`}>Uploads</Link>
            </div>
        </div>
    )
}

export default ServicesSelector