import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Hero2 from '../../Components/Hero2';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';
import Dropdown from '../../Components/Dropdown';


function HRIS() {
    const [showOverlay, setShowOverlay] = React.useState(false);
    return (

        <div className='bg-black relative  '>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
            <nav className='absolute top-0 left-0 right-0 z-10'>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            <div className='h-[625px] mx-15 pt-32'>
                <Hero2
                    title="Human Resource Information System"
                    description="In an era marked by rapid technological advancement and shifting workforce dynamics, a Human Resources Information System (HRIS) stands as a pivotal foundation for modern HR management. Drawing upon a synthesis of research and insights from leading institutions, our HRIS solution is crafted to offer unparalleled support in managing and optimizing human resources functions."
                    image={"/Hero1.png"}
                />
            </div>

            <div className='mx-15 mt-72'>
                <Dropdown
                    Number={"01"}
                    Title={"Enhance recruitment efficiency"}
                    percent={"25%"}
                    description={"Harvard Business Review highlights the importance of data analytics in HR, showing how data-driven decision-making in HR can enhance recruitment efficiency and employee retention by up to 25%"}
                />
                <Dropdown
                    Number={"02"}
                    Title={"Increase employee satisfaction"}
                    percent={"20%"}
                    description={"MIT Sloan Management Review emphasizes the role of technology in enabling flexible work arrangements, which can increase employee satisfaction and productivity by up to 20%"}
                />
                
                <Dropdown
                    Number={"03"}
                    Title={"Improve talent development"}
                    percent={"30%"}
                    description={"Stanford Graduate School of Business points out the necessity of integrated HR systems for effective talent management, noting that cohesive systems can improve talent development outcomes by 30%"}
                />
                <Dropdown
                    Number={"04"}
                    Title={"Reducing administrative tasks"}
                    percent={"40%"}
                    description={" McKinsey & Company underscores the significance of HR automation in reducing administrative tasks, which can free up to 40% of HR professionals' time for strategic initiatives"}
                />
                <Dropdown
                    Number={"05"}
                    Title={"Improving employee experience"}
                    percent={"35%"}
                    description={"Deloitte identifies digital HR platforms as key to improving employee experience, with a potential 35% increase in employee engagement scores"}
                />
                <Dropdown
                    Number={"06"}
                    Title={"Enhance workforce planning effectiveness"}
                    percent={"50%"}
                    description={"The Conference Board discusses the impact of HRIS on workforce planning accuracy, indicating that advanced HRIS can enhance workforce planning effectiveness by up to 50%"}
                />
                <Dropdown
                    Number={"07"}
                    Title={"Improvement in learning outcomes"}
                    percent={"34%"}
                    description={"Bersin by Deloitte stresses the importance of continuous learning and development, with HRIS-driven programs leading to a 34% improvement in learning outcomes"}
                />
                <Dropdown
                    Number={"08"}
                    Title={"Inclusive workplace culture"}
                    percent={"40%"}
                    description={"Gartner focuses on the role of HRIS in supporting diversity and inclusion, finding that technology-enabled D&I initiatives can lead to a more inclusive workplace culture by 45%"}
                />
                <Dropdown
                    Number={"09"}
                    Title={"Increase in HR process efficiency"}
                    percent={"25%"}
                    description={"Forrester points to the efficiency of self-service HR portals in improving HR service delivery, showing a 25% increase in HR process efficiency"}
                />
                <Dropdown
                    Number={"10"}
                    Title={"Enhance employee engagement and accessibility"}
                    percent={"30%"}
                    description={"PricewaterhouseCoopers (PwC) showcases the need for mobile HR solutions, with research indicating that mobile access can enhance employee engagement and accessibility by up to 30%"}
                    border={false}
                />
            </div>

            <div className=' mt-36 mb-48 mx-15 grid grid-cols-4 gap-3'>
                <div className='grid place-content-center'>
                    <Card
                        category={"INSIGHT"}
                        title={"Old World vs New World"}
                        description={"Discover how application and data reporting used to be and how it could be"}
                        image={"/cards/card1.png"}
                        text_color={"text-white"} />
                </div>
                <div className='grid place-content-center'>
                    <Cardv2
                        category={"INSIGHT"}
                        title={"The Foundation for Insight Driven Organizations"}
                        description={"Learn how we build the basic to build for today and build for tomorrow"}
                        image={"/cards/card8.png"}
                        text_color={"text-black"} />
                </div>
                <div className='grid place-content-center'>
                    <Card
                        category={"INDEPENDENT CASE STUDY"}
                        title={"Discover how Optik Melawai develop their business insight"}
                        description={"Discover how Optik Melawai develop their business insight"}
                        image={"/cards/card3.png"}
                        text_color={"text-black"} />
                </div>
                <div className='grid place-content-center'>
                    <Cardv2
                        category={"INSIGHT"}
                        title={"How to tackle digital transformation issues with change management"}
                        description={"How to tackle digital transformation issues with change management"}
                        image={"/cards/card8.png"}
                        text_color={"text-black"} />
                </div>
            </div>

            <div className='relative mb-32'>
                <img src="/ProductContent.png" alt="" />
                <div className='grid place-content-end absolute inset-0 bottom-52 mr-10'>
                    <div className='w-[512px] h-[108px] text-zinc-300'>Designed to empower your organization with the tools and insights needed for effective human capital management. Let's leverage technology to transform your HR practices, driving success through strategic, data-driven human resource management</div>
                    <div className='text-white'>Discuss now</div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default HRIS