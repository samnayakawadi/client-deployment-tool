import { useSelector } from "react-redux"
import ScriptCard from "./components/ScriptCard"
import DashboardHandlers from "../dashboard/DashboardHandlers"

const Scripts = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)
    const scripts = dashboardState.scripts
    const dashboardHandlers = DashboardHandlers()

    return (
        <div className="h-full p-2 flex flex-col gap-3">
            <div className="text-center p-2">Build Assessment Directly from Your Machine</div>
            <hr />
            <div className="text-center p-2">Step 1. Once in a Lifetime Setup ⬇️</div>
            <ScriptCard
                scriptName="Script to Configure WinRM"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/_common/Client/ClientConfigureWinRM.ps1`}
            />
            <hr />
            <div className="text-center p-2">Step 2. Select The Branch</div>
            <select className="select select-info w-full focus:outline-none" value={scripts.currentBranch} onChange={dashboardHandlers.updateCurrentBranchHandler}>
                {/* <option disabled selected>Select language</option> */}
                {scripts.branches.map((singleBranch, branchIndex) => (<option key={branchIndex}>{singleBranch}</option>))}
            </select>
            <hr />
            <div className="text-center p-2">Step 3. Select Any One from Below ⬇️</div>
            <ScriptCard
                scriptName="Script to Build"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/${scripts.currentBranch}/Client/ClientBuildOnly.bat`}
            />
            <div className="text-center p-0">Or</div>
            <ScriptCard
                scriptName="Script to File Transfer"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/${scripts.currentBranch}/Client/ClientFTPOnly.bat`}
            />
            <div className="text-center p-0">Or</div>
            <ScriptCard
                scriptName="Script to Build & File Transfer"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/${scripts.currentBranch}/Client/ClientBuildAndFTP.bat`}
            />
        </div>
    )
}

export default Scripts