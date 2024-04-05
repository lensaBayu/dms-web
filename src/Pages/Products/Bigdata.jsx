import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Hero2 from '../../Components/Hero2';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';
import Dropdown from '../../Components/Dropdown';


function Bigdata() {
    const [showOverlay, setShowOverlay] = React.useState(false);
    return (

        <div className='bg-black relative  '>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
            <nav className='absolute top-0 left-0 right-0 z-20'>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            {/* <div className='pt-16 mx-15'>
                <Hero
                    title="Big Data & Artificial Inteligence"
                    description="In today's data-driven world, Big Data and Artificial Intelligence (AI) have emerged as transformative forces, especially in the realm of Human Resources (HR). Leveraging insights from renowned institutions such as MIT Sloan Management Review, which emphasizes the role of AI in enhancing decision-making and operational efficiency, and Harvard Business Review's analysis on Big Data's impact on HR practices, it's clear that these technologies offer unprecedented opportunities for innovation and strategic management within HR functions."
                    imageSrc="/Hero2.png"
                />
            </div> */}


            <div className='h-[625px] mx-15 pt-32'>
                <Hero2
                    title="Big Data & Artificial Inteligence"
                    description="In today's data-driven world, Big Data and Artificial Intelligence (AI) have emerged as transformative forces, especially in the realm of Human Resources (HR). Leveraging insights from renowned institutions such as MIT Sloan Management Review, which emphasizes the role of AI in enhancing decision-making and operational efficiency, and Harvard Business Review's analysis on Big Data's impact on HR practices, it's clear that these technologies offer unprecedented opportunities for innovation and strategic management within HR functions."
                    image={"/Hero2.png"}
                />
            </div>


            <div className='mx-15 mt-72'>
                <Dropdown
                    Number={"01"}
                    Title={"Enhanced recruitment processes"}
                    percent={"+50%"}
                    description={"AI-driven analytics provide deeper insights into candidate pools, improving the quality and fit of new hires by up to 50%, as evidenced by industry research."}
                />
                <Dropdown
                    Number={"02"}
                    Title={"Increased employee retention"}
                    percent={"+20%"}
                    description={"Big Data analytics enable personalized employee engagement strategies, reducing turnover rates by as much as 20% and increasing employee satisfaction significantly."}
                />
                <Dropdown
                    Number={"03"}
                    Title={"Optimized HR Operations"}
                    percent={"+30%"}
                    description={"AI and Big Data facilitate more informed decisions regarding talent management, workforce planning, and organizational development, enhancing operational efficiency by over 30%."}
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

export default Bigdata