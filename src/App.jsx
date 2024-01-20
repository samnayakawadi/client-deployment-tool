import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import GlobalComponent from "./components/global/GlobalComponent"
import { Route, Routes } from "react-router"
import ClientManager from "./components/editor/client/ClientManager"
import Breadcrumb from "./components/breadcrumb/Breadcrumb"
import DashboardManager from "./components/dashboard/DashboardManager"

function App() {

  return (
    <div className="cursor-crosshair flex flex-col h-screen bg-gray-900">
      <Navbar />
      {/* <div className="m-2 mb-0 flex flex-col gap-2">
        <Breadcrumb />
      </div> */}
      <div className="flex-grow overflow-y-auto">
        <GlobalComponent />
        <Routes>
          <Route path="/" element={<DashboardManager />} />
          <Route path="/editor/*" element={<ClientManager />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
