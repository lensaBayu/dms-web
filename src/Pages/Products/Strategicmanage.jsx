import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Hero2 from '../../Components/Hero2';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';
import Dropdown from '../../Components/Dropdown';


function Strategicmanage() {
    const [showOverlay, setShowOverlay] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            console.log("Scroll Position: ", window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className='bg-black relative  '>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
            <nav className='absolute top-0 left-0 right-0 z-20'>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            <div className='h-[625px] mx-15 pt-32'>
                <Hero2
                    title="Strategic Managed Service"
                    description="Navigating the complexities of the modern business environment requires not just innovation, but strategic foresight and precision execution. Our Strategic Managed Service solution embodies this approach, offering businesses a seamless integration of strategic planning and operational excellence. Leveraging the latest industry insights, such as those from Gartner, which highlight the pivotal role of strategic services in achieving up to a 40% increase in operational efficiency and a 35% reduction in IT operational costs, our service is designed to propel your business forward"
                    image={"/Hero6.png"}
                    scrollPosition={scrollPosition}
                />
            </div>

            <div className='h-[180px]'></div>
            
            <div className='mx-15 mt-96'>
                <Dropdown
                    Number={"01"}
                    Title={"Enhanced Operational Efficiency"}
                    percent={"+40%"}
                    description={"Achieve a leaner, more agile operation with our strategic approach, potentially increasing your efficiency by up to 40%"}
                />
                <Dropdown
                    Number={"02"}
                    Title={"Reduced IT Operational Costs"}
                    percent={"+35%"}
                    description={"Cut through the complexity of IT operations to reduce costs by as much as 35%, enabling more strategic allocation of resources"}
                />
                <Dropdown
                    Number={"03"}
                    Title={"Proactive Strategic Planning"}
                    percent={"+100%"}
                    description={"Stay ahead of the curve with data-driven insights and expert guidance, transforming potential challenges into opportunities for growth."}
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
                        image={"/cards/card9.png"}
                        text_color={"text-black"} />
                </div>
            </div>

            <div className='relative mb-32'>
                <img src="/ProductContent.png" alt="" />
                <div className='grid place-content-end absolute inset-0 bottom-52 mr-10'>
                    <div className='w-[512px] h-[108px] text-zinc-300'>Designed to empower your organization with the tools and insights needed for effective human capital management. Let's leverage technology to transform your HR practices, driving success through strategic, data-driven human resource management</div>
                    <div className='text-white mt-3'>Discuss now</div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default Strategicmanage