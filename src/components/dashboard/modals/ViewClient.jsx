import { useSelector } from "react-redux"
import DashboardHandlers from "../DashboardHandlers"
import JSONPretty from "react-json-pretty"

const ViewClient = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const dashboardHandlers = DashboardHandlers()

    const selectedTab = dashboardState.modals.viewClient.tab

    return (
        <div>
            <input type="checkbox" id="viewClient" checked={dashboardState.modals.viewClient.isChecked} className="modal-toggle" readOnly />
            <div className="modal">
                <div className="modal-box p-3 flex flex-col gap-2">

                    <div role="tablist" className="tabs tabs-boxed border border-gray-400">
                        <a role="tab" className={`tab ${selectedTab === "json" && "tab-active"}`} onClick={() => { dashboardHandlers.updateViewClientTab("json") }}>Data.json</a>
                        <a role="tab" className={`tab ${selectedTab === "properties" && "tab-active"}`} onClick={() => { dashboardHandlers.updateViewClientTab("properties") }}>Data.properties</a>
                    </div>

                    {/* JSON */}
                    {selectedTab === "json" && dashboardState.modals.viewClient.json != null && <JSONPretty className="border p-2 overflow-y-auto overflow-x-auto" id="json-pretty" data={dashboardState.modals.viewClient.json}></JSONPretty>}
                    {selectedTab === "json" && dashboardState.modals.viewClient.json == null &&
                        <div role="alert" className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error fetching Data.json, Kindly Retry or Contact Support.</span>
                        </div>}

                    {/* Properties */}
                    {selectedTab === "properties" && dashboardState.modals.viewClient.properties != null && <JSONPretty className="border p-2 overflow-y-auto overflow-x-auto" id="json-pretty" data={dashboardState.modals.viewClient.properties}></JSONPretty>}
                    {selectedTab === "properties" && dashboardState.modals.viewClient.properties == null &&
                        <div role="alert" className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error fetching Data.properties, Kindly Retry or Contact Support.</span>
                        </div>}

                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case" onClick={() => { dashboardHandlers.toggleViewClientHandler(false) }}>Close</button>
                        </div>
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={dashboardHandlers.copyDataHandler}>Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewClient