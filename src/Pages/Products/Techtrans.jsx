import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Hero2 from '../../Components/Hero2';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';
import Dropdown from '../../Components/Dropdown';


function Techtrans() {
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
                    title="Technology Transformation"
                    description="In an era where technology rapidly reshapes the boundaries of what's possible, Technology Transformation emerges as the cornerstone for businesses aiming to thrive in a digital-first world. Drawing from insights by leading institutions such as McKinsey & Company, which underscores the significant value addition through digital transformation in operational efficiency and market competitiveness, and insights from Deloitte about the critical role of technology in enabling business resilience and innovation, it's evident that technology transformation is not just beneficial but essential for modern businesses."
                    image={"/Hero7.png"}
                    scrollPosition={scrollPosition}
                />
            </div>
            
            <div className='h-[180px]'></div>

            <div className='mx-15 mt-96'>
                <Dropdown
                    Number={"01"}
                    Title={"Accelerated Digital Innovation"}
                    percent={"++"}
                    description={"Propel your business forward with cutting-edge technologies that drive innovation, potentially increasing your market share and opening new revenue streams."}
                />
                <Dropdown
                    Number={"02"}
                    Title={"Enhanced Operational Efficiency"}
                    percent={"+40%"}
                    description={" Implement smarter, technology-driven processes to boost your operational efficiency by up to 40%, as demonstrated by industry leaders, thereby reducing costs and improving service delivery."}
                />
                <Dropdown
                    Number={"03"}
                    Title={"Strengthened Business Resilience"}
                    percent={"++"}
                    description={"Build a more resilient business capable of withstanding digital disruptions and adapting to market changes, ensuring long-term sustainability and growth"}
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

export default Techtrans