import Buttons from "./components/dashboard/Buttons"
import Dashboard from "./components/dashboard/Dashboard"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import GlobalComponent from "./components/global/GlobalComponent"
import { Route, Routes } from "react-router"
import Manager from "./components/editor/client/Manager"

function App() {

  return (
    <div className="cursor-crosshair flex flex-col h-screen">
      <Navbar />
      <div className="m-2">
        <Buttons />
      </div>
      <div className="flex-grow border-2 border-gray-600 m-2 p-2 overflow-y-auto">
        <GlobalComponent />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/editor/*" element={<Manager />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
