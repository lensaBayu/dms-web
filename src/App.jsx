import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import HRIS from "./Pages/HRIS"
import Bigdata from "./Pages/Bigdata"

function App() {

  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/hris" element={<HRIS />} />
        <Route path="/product/bigdata" element={<Bigdata />} />
      </Routes>
    </div>
  )
}

export default App