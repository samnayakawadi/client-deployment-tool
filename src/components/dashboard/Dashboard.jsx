import { useEffect } from "react"
import planning from "./images/planning.png"
import AddNewClient from "./modals/AddNewClient"
import DashboardHandlers from "./DashboardHandlers"
import { useSelector } from "react-redux"
import DeleteClientConfirmation from "./modals/DeleteClientConfirmation"
import ViewClient from "./modals/ViewClient"
import DownloadClient from "./modals/DownloadClient"

// eslint-disable-next-line react/prop-types
const Dashboard = () => {

    const dashboardHandlers = DashboardHandlers()
    const dashboardState = useSelector(prevState => prevState.dashboard)
    const clientsList = dashboardState.getClients.clientsList
    const isLoading = dashboardState.getClients.isLoading

    useEffect(() => {
        dashboardHandlers.getAllClientsHandler()
    }, [])

    return (
        <div className="h-full px-2">
            <div className="grid grid-cols-4 gap-2 max-lg:grid-cols-1">
                {clientsList.map((singleClient, clientIndex) => {
                    return (
                        <div key={clientIndex}>
                            {!isLoading && (<div key={`client_${singleClient._id}`} className="rounded-md transition ease-linear delay-75 hover:cursor-crosshair flex flex-col items-center">
                                <div className="flex flex-row justify-center items-center w-full border-2 border-gray-600 p-3 gap-3">
                                    <div className="basis-6/12 flex flex-row justify-center items-center border-r-2 border-gray-600">
                                        <img src={planning} className="w-20" alt="defaultQuizIcon" />
                                    </div>
                                    <div className="basis-6/12 flex flex-row justify-center items-center text-center">
                                        <h1 className="text-xl font-semibold pt-2">{singleClient.clientName}</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 w-full gap-2 pt-3">
                                    <button className={`btn btn-block btn-md btn-info text-black normal-case no-animation rounded-sm`} onClick={() => { dashboardHandlers.getClientJSONHandler(singleClient._id); dashboardHandlers.getClientPropertiesHandler(singleClient._id) }}>View</button>
                                    <button className={`btn btn-block btn-md btn-success text-black normal-case no-animation rounded-sm`} onClick={() => { dashboardHandlers.toggleDownloadClientHandler(singleClient._id) }}>Download</button>
                                    <button className={`btn btn-block btn-md btn-warning text-black normal-case no-animation rounded-sm`} onClick={() => { dashboardHandlers.navigateToClientEditor(singleClient._id) }}>Edit</button>
                                    <button className={`btn btn-block btn-md btn-accent text-black normal-case no-animation rounded-sm`} onClick={() => { dashboardHandlers.toggleDeleteClientHandler(singleClient._id, clientIndex) }}>Delete</button>
                                </div>
                            </div>)}
                            {isLoading && (<div>
                                <div className="flex flex-col gap-4 w-full border border-gray-500 p-2">
                                    {/* <div className="flex gap-4 items-center">
                                        <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="skeleton h-4 w-20"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                        </div>
                                    </div> */}
                                    <div className="skeleton h-40 w-full"></div>
                                </div>
                            </div>)}
                        </div>
                    )
                })}
            </div>

            {clientsList.length === 0 && <div className="border border-gray-600 h-full flex justify-center items-center">
                <div>
                    No Clients Found. Add New Client
                </div>
            </div>}
            <AddNewClient />
            <DeleteClientConfirmation />
            <ViewClient />
            <DownloadClient />
        </div>
    )
}

export default Dashboard