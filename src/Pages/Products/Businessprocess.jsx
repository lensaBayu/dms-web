import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Hero2 from '../../Components/Hero2';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';
import Dropdown from '../../Components/Dropdown';


function Businessprocess() {
    const [showOverlay, setShowOverlay] = React.useState(false);
    return (

        <div className='bg-black relative  '>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
            <nav className='absolute top-0 left-0 right-0 z-20'>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            <div className='h-[625px] mx-15 pt-32'>
                <Hero2
                    title="Business Process Automation"
                    description="In the era of digital transformation, Business Process Automation (BPA) stands out as a critical lever for streamlining operations, enhancing efficiency, and driving business innovation. According to a comprehensive study by Forrester, organizations that implement BPA solutions can expect to see an average increase in operational efficiency by up to 40%, coupled with a reduction in processing costs by up to 50%. This significant impact is further echoed by findings from IDC, which highlight that companies leveraging automation technologies not only achieve these efficiency gains but also see a marked improvement in customer satisfaction and employee engagement."
                    image={"/Hero5.png"}
                />
            </div>

            <div className='mx-15 mt-72'>
                <Dropdown
                    Number={"01"}
                    Title={"Substantial Operational Efficiency Gains"}
                    percent={"+40%"}
                    description={"Substantial Operational Efficiency Gains: Streamline and automate key business processes to boost efficiency by as much as 40%, allowing your team to focus on higher-value tasks."}
                />
                <Dropdown
                    Number={"02"}
                    Title={"Significant Reduction in Processing Costs"}
                    percent={"+50%"}
                    description={"Through automation, reduce manual processing costs by up to 50%, optimizing your budget allocation for greater strategic impact."}
                />
                <Dropdown
                    Number={"03"}
                    Title={"Enhanced Customer Satisfaction"}
                    percent={""}
                    description={"Implement workflows that not only meet but exceed customer expectations while fostering a more engaged and productive workforce."}
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

export default Businessprocess