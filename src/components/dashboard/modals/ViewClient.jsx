import { useSelector } from "react-redux"
import DashboardHandlers from "../DashboardHandlers"
import JSONPretty from "react-json-pretty"

const ViewClient = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const dashboardHandlers = DashboardHandlers()

    return (
        <div>
            <input type="checkbox" id="viewClient" checked={dashboardState.modals.viewClient.isChecked} className="modal-toggle" readOnly />
            <div className="modal">
                <div className="modal-box p-3 flex flex-col gap-2">

                    {dashboardState.modals.viewClient.json != null && <JSONPretty className="border p-2 overflow-y-auto overflow-x-auto" id="json-pretty" data={dashboardState.modals.viewClient.json}></JSONPretty>}

                    {dashboardState.modals.viewClient.json == null &&
                        <div role="alert" className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error fetching JSON. Kindly Retry or Contact Support.</span>
                        </div>}

                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-full">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={dashboardHandlers.toggleViewClientHandler}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewClient