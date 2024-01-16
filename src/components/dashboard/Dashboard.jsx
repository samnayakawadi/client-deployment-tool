import { useEffect } from "react"
import planning from "./images/planning.png"
import AddNewClient from "./modals/AddNewClient"
import DashboardHandlers from "./DashboardHandlers"
import { useSelector } from "react-redux"
import DeleteClientConfirmation from "./modals/DeleteClientConfirmation"

// eslint-disable-next-line react/prop-types
const Dashboard = () => {

    const dashboardHandlers = DashboardHandlers()
    const clientsList = useSelector(prevState => prevState.dashboard.clientsList)

    useEffect(() => {
        dashboardHandlers.getAllClientsHandler()
    }, [])

    return (
        <div id="service" className=" text-white container-padding-x container-padding-y scroll-margin-top h-full">

            <div className="grid grid-cols-4 gap-2 max-lg:grid-cols-1">

                {clientsList.map((singleClient, clientIndex) => {
                    return (
                        <div className="p-3 bg-navbg rounded-md transition ease-linear delay-75 hover:cursor-crosshair flex flex-col items-center">
                            <div className="flex flex-row justify-center items-center w-full border-2 border-gray-500 p-3 gap-3">
                                <div className="basis-6/12 flex flex-row justify-center items-center border-r-2 border-gray-500">
                                    <img src={planning} className="w-20" alt="defaultQuizIcon" />
                                </div>
                                <div className="basis-6/12 flex flex-row justify-center items-center text-center">
                                    <h1 className="text-xl font-semibold pt-2">{singleClient.clientName}</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 w-full gap-2 pt-3">
                                <button className={`btn btn-block btn-md btn-info text-black normal-case no-animation rounded-sm`} >View</button>
                                <button className={`btn btn-block btn-md btn-success text-black normal-case no-animation rounded-sm`} >Download</button>
                                <button className={`btn btn-block btn-md btn-warning text-black normal-case no-animation rounded-sm`} >Edit</button>
                                <button className={`btn btn-block btn-md btn-accent text-black normal-case no-animation rounded-sm`} onClick={() => { dashboardHandlers.toggleDeleteClientHandler(singleClient._id, clientIndex) }}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {clientsList.length === 0 && <div className="flex justify-center items-center h-full">
                No Clients Found. Add New Client
            </div>}
            <AddNewClient />
            <DeleteClientConfirmation />
        </div>
    )
}

export default Dashboard