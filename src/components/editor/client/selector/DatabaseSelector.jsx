import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const DatabaseSelector = () => {
    const clientEditorState = useSelector(prevState => prevState.clientEditor)
    const selectedTab = clientEditorState.selectedTabs.database

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed border border-gray-700">
                <Link to="/editor/database/mongo" className={`tab ${selectedTab === "mongo" && "tab-active"}`}>MongoDB</Link>
                <Link to="/editor/database/sql" className={`tab ${selectedTab === "sql" && "tab-active"}`}>SQL</Link>
            </div>
        </div>
    )
}

export default DatabaseSelector