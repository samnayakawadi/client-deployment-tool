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
                    <div className="flex flex-col gap-2">
                        <div role="tablist" className="tabs tabs-boxed border border-gray-400">
                            <a role="tab" className={`tab ${selectedTab === "linux" && "tab-active"}`} onClick={() => { dashboardHandlers.selectDownloadClientTabHandler("linux") }}>Linux</a>
                            <a role="tab" className={`tab ${selectedTab === "windows" && "tab-active"}`} onClick={() => { dashboardHandlers.selectDownloadClientTabHandler("windows") }}>Windows</a>
                        </div>
                        <div>
                            {selectedTab === "windows" && <div role="alert" className="alert alert-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>Search "Terminal" in Windows {">"} Run as Administrator {">"} Paste The Command</span>
                            </div>}
                            {selectedTab === "linux" && <div role="alert" className="alert alert-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>Open "Terminal" in Linux {">"} Run <code>"sudo -s"</code> {">"} Paste The Command</span>
                            </div>}
                        </div>
                        <div className="mockup-code border border-gray-400 rounded-none">
                            <pre data-prefix=">" className="text-success">
                                <code>
                                    {dashboardHandlers.getGenerateJSONCommandHandler(selectedTab, "text")}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-4/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-info btn-block normal-case" onClick={() => { dashboardHandlers.toggleDownloadClientHandler(null) }}>Close</button>
                        </div>
                        <div className="basis-4/12">
                            <a href={dashboardHandlers.downloadClientJSONURLGenerator()} htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case">Download JSON</a>
                        </div>
                        <div className="basis-4/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={() => { dashboardHandlers.copyCommandHandler(selectedTab) }}>Copy Command</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DownloadClient