import { useSelector } from "react-redux"
import DashboardHandlers from "../DashboardHandlers"

const DeleteClientConfirmation = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const dashboardHandlers = DashboardHandlers()

    return (
        <div>
            <input type="checkbox" id="deleteClient" checked={dashboardState.modals.deleteClient.isChecked} className="modal-toggle" readOnly />
            <div className="modal">
                <div className="modal-box p-3 flex flex-col gap-2">

                    <div role="alert" className="alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>Remember this action cannot be undone. Are you sure to delete this client?</span>
                    </div>

                    <div className="modal-action flex flex-row justify-center mt-0">
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-success btn-block normal-case" onClick={dashboardHandlers.toggleDeleteClientHandler}>Cancle</button>
                        </div>
                        <div className="basis-6/12">
                            <button htmlFor="globalModal" className="btn no-animation btn-accent btn-block normal-case" onClick={dashboardHandlers.deleteClientHandler}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DeleteClientConfirmation