import Buttons from "./Buttons"
import Dashboard from "./Dashboard"

const Manager = () => {
    return (
        <div className="flex flex-col h-full gap-2">
            <div className="border-2 border-gray-600 p-2">
                <Buttons />
            </div>
            <div className="flex-grow overflow-y-auto border-2 border-gray-600">
                <Dashboard />
            </div>
        </div>
    )
}

export default Manager