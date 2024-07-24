import { useSelector } from "react-redux"
import DashboardHandlers from "../DashboardHandlers"

const DownloadClient = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const dashboardHandlers = DashboardHandlers()
    const selectedTab = dashboardState.modals.downloadClient.selectedTab
    const globalState = useSelector(prevState => prevState.global)

    const mainServer = globalState.servers.main
    const clientId = dashboardState.modals.downloadClient.clientId

    return (
        <div>
            <input type="checkbox" id="downloadClient" checked={dashboardState.modals.downloadClient.isChecked} className="modal-toggle" readOnly />
            <div className="modal">
                <div className="modal-box p-3 flex flex-col gap-2">
                    <div className="flex flex-row justify-center gap-2">
                        <div className="basis-6/12">
                            <a href={dashboardHandlers.downloadClientJSONURLGenerator()} htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case">assessment.json</a>
                        </div>
                        <div className="basis-6/12">
                            <a href={dashboardHandlers.downloadClientPropertiesURLGenerator()} htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case">assessment.properties</a>
                        </div>
                    </div>
                    <div>
                        <button htmlFor="globalModal" className="btn no-animation btn-info btn-block normal-case" onClick={() => { dashboardHandlers.toggleDownloadClientHandler(null) }}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DownloadClient