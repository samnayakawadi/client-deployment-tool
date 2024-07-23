import { useSelector } from "react-redux"
import DashboardHandlers from "../../dashboard/DashboardHandlers"

const TroubleshootModal = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const dashboardHandlers = DashboardHandlers()

    return (
        <div>
            <input type="checkbox" id="addNewClient" checked={dashboardState.modals.troubleshootScripts.isChecked} className="modal-toggle" readOnly />
            <div className="modal">
                <div className="modal-box p-3 flex flex-col gap-2">

                    <div className="w-full p-4">
                        <div className="text-center pb-3">
                            After Downloading The Configuration File, Just Run These Commands One by One !
                        </div>
                        <div className="bg-gray-800 text-white p-2 rounded mb-2">
                            <code>Set-ExecutionPolicy Bypass -Scope Process -Force</code>
                        </div>
                        <div className="bg-gray-800 text-white p-2 rounded mb-2">
                            <code>cd $env:USERPROFILE\Downloads</code>
                        </div>
                        <div className="bg-gray-800 text-white p-2 rounded">
                            <code>.\ClientConfigureWinRM.ps1</code>
                        </div>
                    </div>

                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-full">
                            <button htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case" onClick={dashboardHandlers.toggleTroubleshootModalHandler}>Close</button>
                        </div>
                        {/* <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={dashboardHandlers.addNewClientHandler}>Add</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TroubleshootModal