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
                scriptName="Configure WinRM"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/_common/Client/ClientConfigureWinRM.ps1`}
            />
            <div className="text-center p-0 hover:underline hover:cursor-pointer" onClick={dashboardHandlers.toggleTroubleshootModalHandler}>Troubleshoot Step 1</div>
            <hr />
            <div className="text-center p-2">Step 2. Select The Branch</div>
            <select className="select select-info w-full focus:outline-none" value={scripts.currentBranch} onChange={dashboardHandlers.updateCurrentBranchHandler}>
                {/* <option disabled selected>Select language</option> */}
                {scripts.branches.map((singleBranch, branchIndex) => (<option key={branchIndex}>{singleBranch}</option>))}
            </select>
            <hr />
            <div className="text-center p-2">Step 3. Select Any One from Below ⬇️</div>
            <ScriptCard
                scriptName="Build"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/${scripts.currentBranch}/Client/ClientBuildOnly.bat`}
            />
            <div className="text-center p-0">Or</div>
            <ScriptCard
                scriptName="File Transfer"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/${scripts.currentBranch}/Client/ClientFTPOnly.bat`}
            />
            <div className="text-center p-0">Or</div>
            <ScriptCard
                scriptName="Build & File Transfer"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/${scripts.currentBranch}/Client/ClientBuildAndFTP.bat`}
            />
            <div className="p-1" />
            <hr />
            <div className="text-center p-2">Step 4. Download assessment.json & assessment.properties to /downloads folder ⬇️</div>
            <hr />
            <div className="text-center p-2">Step 5. Upload everything to /var/www ⬇️</div>
            <ScriptCard
                scriptName="Deployer for Linux"
                logoClass="fas fa-code"
                downloadLink={`/scriptsToDownload/_common/Client/ClientBuildDeployerForLinuxServer.ps1`}
            />
            <div className="text-center p-1 text-warning pb-2">Note : It will override any existing files with the same name & It will keep other files {"[Right Click & Run with PowerShell]"}</div>
        </div>
    )
}

export default Scripts