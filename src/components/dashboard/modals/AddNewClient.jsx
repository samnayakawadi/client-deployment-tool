import React from 'react'
import { useSelector } from 'react-redux'
import DashboardHandlers from '../DashboardHandlers'

const AddNewClient = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const dashboardHandlers = DashboardHandlers()

    return (
        <div>
            <input type="checkbox" id="addNewClient" checked={dashboardState.modals.addNewClient.isChecked} className="modal-toggle" readOnly />
            <div className="modal">
                <div className="modal-box p-3 flex flex-col gap-2">

                    <input type="text" placeholder="Enter Client Name" value={dashboardState.modals.addNewClient.clientName} className="input input-bordered input-success w-full focus:outline-none" onChange={dashboardHandlers.updateClientNameHandler} />

                    <div role="alert" className="alert alert-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>The client will be created with default data</span>
                    </div>

                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case" onClick={dashboardHandlers.toggleAddNewClientHandler}>Cancle</button>
                        </div>
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={dashboardHandlers.addNewClientHandler}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewClient