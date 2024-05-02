import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';

const Insight7 = () => {
    const [showOverlay, setShowOverlay] = React.useState(false);


    return (
        <div className='bg-black relative'>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
            <nav className='absolute top-0 left-0 right-0 z-20 '>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>
            
            <div className=' h-[200px]'></div>

            <div className='px-[285px] text-neutral-200 leading-none'>
                <div className='text-[76px] font-medium'>Streamlining Talent Recruitment: The Cost and Time Benefits of Outsourcing</div>
                <div className='h-[75px] '></div>
                <div>
                    <img src="/insights/Insight7.png" alt="" />
                </div>
                <div className='h-[75px] '></div>
                <div className='font-thin leading-normal text-[18px] '>
                In the rapidly evolving business landscape, finding and hiring the right talent is more critical and challenging than ever. Talent recruitment is a time-consuming and expensive process that involves several stages, from sourcing and screening candidates to conducting interviews and negotiating offers. To optimize this process, many organizations are turning to outsourcing as a strategic solution. Outsourcing talent recruitment to specialized agencies or services can significantly save costs and time, enabling businesses to focus on their core operations. Let's explore how outsourcing talent recruitment can benefit your organization.
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Understanding Outsourcing in Talent Recruitment</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >  
                        Outsourcing in the context of talent recruitment involves hiring external organizations (recruitment agencies, RPO providers, or freelance recruiters) to manage all or part of the recruitment process. These entities specialize in sourcing, attracting, and hiring talent, leveraging their extensive networks, expertise, and technologies to streamline the recruitment process.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px]  font-medium pb-5'>Cost Savings through Outsourcing</div>

                    <div className=''>
                        <ul className='font-thin leading-normal text-[18px] list-disc px-5'>
                        
                            <li>Reduced Overhead Costs: Maintaining an in-house recruitment team involves overhead expenses, including salaries, benefits, and recruitment tools. Outsourcing eliminates these costs, as you pay for the service without bearing the ongoing costs of employing a full-time recruitment team.</li>
                            <br />
                            <li>Lower Advertising Fees: Recruitment agencies have subscriptions to job boards and professional networks, allowing them to post job advertisements at a lower cost. This collective bargaining power can significantly reduce the cost of attracting candidates.</li>
                            <br />
                            <li>Minimized Bad Hire Risks: Making a bad hire can be expensive, considering the recruitment, training, and lost productivity costs. Outsourcing to experienced recruiters who are adept at evaluating candidates can decrease the likelihood of bad hires, saving considerable costs in the long run.</li>
                            <br />
                            <li>Efficiency in High-Volume Recruitment: For organizations that need to fill many positions simultaneously, managing the process in-house can be daunting and inefficient. Outsourcing can handle high-volume recruitment more effectively, reducing the cost per hire through economies of scale.</li>
                            <br />
                        </ul>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px]  font-medium pb-5'>Time Savings and Efficiency</div>

                    <div className=''>
                        <ul className='font-thin leading-normal text-[18px] list-disc px-5'>
                        
                            <li>Faster Time-to-Hire: Recruitment agencies have ready access to a large pool of qualified candidates, enabling them to fill vacancies faster than an in-house team that starts the search from scratch.</li>
                            <br />
                            <li>Focus on Core Business Activities: Outsourcing recruitment allows your HR department and hiring managers to focus on their core responsibilities instead of getting bogged down in the time-consuming recruitment process.</li>
                            <br />
                            <li>Access to Specialized Recruiters: Recruitment agencies often specialize in specific industries or roles, bringing a deep understanding of the market and the skills required for positions. This expertise can speed up the recruitment process and ensure a better match between the job requirements and the candidates.</li>
                            <br />
                            <li>Advanced Recruitment Technologies: Many outsourcing firms use advanced recruitment technologies, including AI-powered screening tools and applicant tracking systems, to streamline the recruitment process. These technologies can speed up candidate screening and selection, saving time for the organization.</li>
                            <br />
                        </ul>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Strategic Partnership and Flexibility</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >  
                        Outsourcing talent recruitment is not just a transactional service; it can be a strategic partnership that adds value to your business. Recruitment agencies can provide valuable market insights, salary benchmarking information, and advice on employment trends. Additionally, the flexibility to scale recruitment efforts up or down based on business needs is a significant advantage of outsourcing.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Conclusion</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >  
                        Outsourcing talent recruitment offers substantial cost and time benefits, enabling organizations to streamline their hiring processes, reduce risks associated with bad hires, and focus on their core business activities. By partnering with specialized recruitment agencies, companies can access expertise, networks, and technologies that enhance their ability to attract and retain top talent. As the competition for skilled professionals intensifies, the strategic importance of outsourcing in talent recruitment will continue to grow, making it an essential component of modern HR strategy.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

            </div>

                <div className='h-[240px]'></div>

                <div>
                <div className='mx-20 text-[25px] font-medium text-neutral-50'>More about AI for HR</div>
                <div className=' mx-15 grid grid-cols-4 gap-3'>
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
            </div>

                <footer>
                    <Footer />
                </footer>

            </div >



    )
}

export default Insight7