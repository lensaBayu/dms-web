import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import HRIS from "./Pages/Products/HRIS"
import Bigdata from "./Pages/Products/Bigdata"
import Digitalengine from "./Pages/Products/Digitalengine"
import Changemanage from "./Pages/Products/Changemanage"
import Businessprocess from "./Pages/Products/Businessprocess"
import Strategicmanage from "./Pages/Products/Strategicmanage"
import Techtrans from "./Pages/Products/Techtrans"
import AboutUs from "./Pages/WhoWeAre/AboutUs"
import Insight1 from "./Pages/Insights/Insight1"
import Insight2 from "./Pages/Insights/Insight2"
import Insight3 from "./Pages/Insights/Insight3"
import Insight4 from "./Pages/Insights/Insight4"
import Insight5 from "./Pages/Insights/Insight5"
import Insight6 from "./Pages/Insights/Insight6"
import Insight7 from "./Pages/Insights/Insight7"
import Insight8 from "./Pages/Insights/Insight8"
import Career from "./Pages/Careers/Career"

function App() {

  return (
    <div className="bg-black h-screen ">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/hris" element={<HRIS />} />
        <Route path="/product/bigdata" element={<Bigdata />} />
        <Route path="/product/digitalengine" element={<Digitalengine />} />
        <Route path="/product/changemanage" element={<Changemanage />} />
        <Route path="/product/businessprocess" element={<Businessprocess />} />
        <Route path="/product/strategicmanage" element={<Strategicmanage />} />
        <Route path="/product/techtrans" element={<Techtrans />} />
        <Route path="/whoweare/aboutus" element={<AboutUs />} />
        <Route path="/insight/The-Transformational-Power-of-Intelligent-Automation" element={<Insight1 />} />
        <Route path="/insight/Revolutionizing-Human-Resources-with-Artificial-Intelligence" element={<Insight2 />} />
        <Route path="/insight/Streamlining-Human-Resources-with-Robotic-Process-Automation" element={<Insight3 />} />
        <Route path="/insight/Navigating-Digital-Transformation-and-Change-Management" element={<Insight4 />} />
        <Route path="/insight/Navigating-Change-for-Future-Ready-Success" element={<Insight5 />} />
        <Route path="/insight/Transforming-Human-Capital-Management" element={<Insight6 />} />
        <Route path="/insight/The-Cost-and-Time-Benefits-of-Outsourcing" element={<Insight7 />} />
        <Route path="/insight/Strategies-for-the-Modern-Workplace" element={<Insight8 />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
    </div>
  )
}

export default App