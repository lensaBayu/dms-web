import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Hero2 from "../../Components/Hero2";
import Card from "../../Components/Card";
import Cardv2 from "../../Components/Cardv2";
import Dropdown from "../../Components/Dropdown";

function Changemanage() {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log("Scroll Position: ", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-black relative  ">
      {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <Navbar setShowOverlay={setShowOverlay} />
      </nav>

      <div className="mx-15 pt-32">
        <Hero2
          title="Change Management"
          description="Navigating the complexities of organizational change requires a comprehensive, research-backed approach. Integrating insights from ten esteemed institutions, our Change Management solution embodies a holistic strategy designed to guide businesses through transformation with agility and resilience. These insights underscore the multifaceted nature of change management, highlighting its critical role in ensuring successful organizational adaptation and growth."
          image={"/Hero3.png"}
          scrollPosition={scrollPosition}
        />
      </div>

      <div className="mx-15 mt-32">
        <Dropdown Number={"01"} Title={"The engine of successful change"} percent={"+30%"} description={"Harvard Business Review emphasizes the importance of leadership in change management, noting that effective leadership can increase project success rates by up to 30%."} />
        <Dropdown Number={"02"} Title={"Focuses on employee engagement"} percent={"+22%"} description={"MIT Sloan Management Review highlights the role of employee engagement in change initiatives, revealing that organizations with high engagement levels see 22% higher success in change efforts."} />
        <Dropdown Number={"03"} Title={"Building bridges for stakeholder buy-In"} percent={"+50%"} description={"Stanford Social Innovation Review points out the significance of clear communication, with research indicating that transparent and consistent communication can improve stakeholder buy-in by up to 50%."} />
        <Dropdown Number={"04"} Title={"Doubling your odds of change success"} percent={""} description={"McKinsey & Company underscores the value of a structured approach to change, which can double the odds of success of change programs."} />
        <Dropdown Number={"05"} Title={"Identifies the critical role of culture"} percent={"+33%"} description={"Deloitte identifies the critical role of culture in change management, demonstrating that cultural alignment can enhance the effectiveness of change initiatives by up to 33%"} />
        <Dropdown Number={"06"} Title={"The importance of adaptability"} percent={"+24%"} description={"The Wharton School discusses the importance of adaptability, showing that flexible organizations are 24% more likely to outperform their peers in change efforts."} />
        <Dropdown Number={"07"} Title={"Tools for change implementation "} percent={"+20%"} description={"Boston Consulting Group (BCG) stresses the impact of digital tools in facilitating change, with organizations leveraging digital technologies seeing a 20% increase in change program efficiency."} />
        <Dropdown Number={"08"} Title={"Optimizing change with analytics"} percent={"+25%"} description={"Bain & Company focuses on the power of data analytics in change management, finding that data-driven strategies can lead to a 25% improvement in achieving change objectives."} />
        <Dropdown Number={"09"} Title={"Partnering for change success"} percent={"+30%"} description={"Oxford Economics points to the importance of stakeholder engagement, where effective involvement strategies can lead to a 30% higher chance of change success."} />
        <Dropdown Number={"10"} Title={"The change through continuous development"} percent={"+34%"} description={"PricewaterhouseCoopers (PwC) showcases the need for continuous learning, with organizations that prioritize learning and development experiencing 34% more successful change initiatives."} />
      </div>

      <div className=" mt-36 mb-48 mx-15 grid grid-cols-4 gap-3">
        <div className="grid place-content-center">
          <Card
            category={"INSIGHT"}
            title={"Old World vs New World"}
            description={
              "Discover how application and data reporting used to be and how it could be"
            }
            image={"/cards/card1.png"}
            text_color={"text-white"}
          />
        </div>
        <div className="grid place-content-center">
          <Cardv2
            category={"INSIGHT"}
            title={"The Foundation for Insight Driven Organizations"}
            description={"Learn how we build the basic to build for today and build for tomorrow"}
            image={"/cards/card8.png"}
            text_color={"text-black"}
          />
        </div>
        <div className="grid place-content-center">
          <Card
            category={"INDEPENDENT CASE STUDY"}
            title={"Discover how Optik Melawai develop their business insight"}
            description={"Discover how Optik Melawai develop their business insight"}
            image={"/cards/card3.png"}
            text_color={"text-black"}
          />
        </div>
        <div className="grid place-content-center">
          <Cardv2
            category={"INSIGHT"}
            title={"How to tackle digital transformation issues with change management"}
            description={"How to tackle digital transformation issues with change management"}
            image={"/cards/card9.png"}
            text_color={"text-black"}
          />
        </div>
      </div>

      <div className="relative mb-32">
        <img src="/ProductContent.png" alt="" />
        <div className="grid place-content-end absolute inset-0 bottom-52 mr-10">
          <div className="w-[512px] h-[108px] text-zinc-300">
            Designed to empower your organization with the tools and insights needed for effective
            human capital management. Let's leverage technology to transform your HR practices,
            driving success through strategic, data-driven human resource management
          </div>
          <div className="text-white mt-3">Discuss now</div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Changemanage;
