import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import HRIS from "./Products/HRIS"
import Bigdata from "./Products/Bigdata"
import Digitalengine from "./Products/Digitalengine"
import Changemanage from "./Products/Changemanage"
import Businessprocess from "./Products/Businessprocess"
import Strategicmanage from "./Products/Strategicmanage"
import Techtrans from "./Products/Techtrans"

function App() {

  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/hris" element={<HRIS />} />
        <Route path="/product/bigdata" element={<Bigdata />} />
        <Route path="/product/digitalengine" element={<Digitalengine />} />
        <Route path="/product/changemanage" element={<Changemanage />} />
        <Route path="/product/businessprocess" element={<Businessprocess />} />
        <Route path="/product/strategicmanage" element={<Strategicmanage />} />
        <Route path="/product/techtrans" element={<Techtrans />} />
      </Routes>
    </div>
  )
}

export default App