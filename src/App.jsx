import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Products from "./Pages/Products"
// import ProBigData from "./Pages/Probigdata"

function App() {

  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/probigdata" element={<ProBigData />} /> */}
      </Routes>
    </div>
  )
}

export default App