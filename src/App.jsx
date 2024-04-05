import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import HRIS from "./Pages/Products/HRIS"
import Bigdata from "./Pages/Products/Bigdata"
import Automation from "./Pages/Products/Automation"
import DigitalEngineering from "./Pages/Products/DigitalEngineering"

function App() {

  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/hris" element={<HRIS />} />
        <Route path="/product/bigdata" element={<Bigdata />} />
        <Route path="/product/automation" element={<Automation />} />
        <Route path="/product/digitalengineering" element={<DigitalEngineering />} />
      </Routes>
    </div>
  )
}

export default App