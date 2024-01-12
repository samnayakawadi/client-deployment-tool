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

                    <input type="text" placeholder="Enter Client Name" className="input input-bordered input-success w-full focus:outline-none" />

                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-info btn-block normal-case" onClick={dashboardHandlers.toggleAddNewClientHandler}>Cancle</button>
                        </div>
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={dashboardHandlers.toggleAddNewClientHandler}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewClient