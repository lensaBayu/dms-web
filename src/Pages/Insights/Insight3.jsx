import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';
import CommentForm from '../../Components/CommentForm'

const Insight3 = () => {
    const [showOverlay, setShowOverlay] = React.useState(false);


    return (
        <div className='bg-black relative'>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
            <nav className='absolute top-0 left-0 right-0 z-20 '>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            <div className=' h-[200px]'></div>

            <div className='px-[285px] text-neutral-200 leading-none'>
                <div className='text-[76px] font-medium'>RPA for HR: Streamlining Human Resources with Robotic Process Automation</div>
                <div className='h-[75px] '></div>
                <div>
                    <img src="/insights/Insight3.png" alt="" />
                </div>
                <div className='h-[75px] '></div>
                <div className='font-thin leading-normal text-[18px] '>
                    Robotic Process Automation (RPA) is revolutionizing the Human Resources (HR) sector by automating repetitive,time-consuming tasks, allowing HR professionals to focus on more strategic and human-centric aspects on their jobs. This transormative technology is enhancing efficiency, accuracy, and employee satisfaction in HR processes. Let s explore how RPA is making a difference in HR, the benefits it brings, and what the future holds.
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'>The Role of RPA in HR</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty'>
                            RPA involves the use of software robots or 'bots' to automate routine tasks across various applications and systems without the need for human intervention. In HR, this translates to a myriad of applications, from recruitment and onboarding to payroll and compliance reporting, significantly reducing the administrative burden on HR teams.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Transforming Recruitment and Onboarding</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >
                            RPA tools can automate several aspects of the recruitment process, such as posting job adverts across multiple platforms, screening resumes for relevant qualifications, and scheduling interviews with candidates. This not only speeds up the recruitment process but also ensures a fair and unbiased selection procedure. For onboarding, RPA can handle the myriad of paperwork and processes involved, ensuring new hires have a smooth and welcoming introduction to the organization.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Enhancing Employee Data Management</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >
                            Managing employee data is a critical yet cumbersome task in HR. RPA can automate data entry, update, and retrieval processes, ensuring data accuracy and compliance. This automation extends to maintaining employee records, processing leave requests, and updating employee benefits, significantly reducing manual errors and enhancing data security.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Simplifying Payroll Processing</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >
                            Payroll processing is another area where RPA can bring significant improvements. By automating data collection from timesheets, calculating pay based on hours worked, and applying deductions and taxes, RPA ensures that employees are paid accurately and on time. This automation not only minimizes errors but also ensures compliance with tax laws and regulations.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Improving Employee Experience</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >
                            RPA contributes to a better employee experience by providing quick and accurate responses to routine inquiries about benefits, leave balances, and payroll. This responsiveness enhances employee satisfaction and allows HR professionals to focus on addressing more complex and personal concerns, fostering a positive work
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px]  font-medium pb-5'>Benefits RPA in HR</div>

                    <div className=''>
                        <ul className='font-thin leading-normal text-[18px] list-disc px-5'>
                            <li> Increased Efficiency: Automating routine tasks reduces the time spent on administrative processes, allowing HR teams to focus on strategic planning and employee engagement.</li>
                            <br />
                            <li>Improved Accuracy: RPA reduces human error in data entry and processing, ensuring accuracy in employee data management and payroll.</li>
                            <br />
                            <li>Enhanced Compliance: With RPA, compliance with labor laws and regulations is streamlined, as bots can be updated to reflect changes in legislation, reducing the risk of non-compliance.</li>
                            <br />
                            <li>Cost Reduction: By streamlining HR processes, RPA can lead to significant cost savings in terms of labor and error rectification.</li>
                            <br />
                        </ul>
                    </div>
                </div>

                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Future of Prospects RPA in HR</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >
                            As HR departments continue to evolve, the role of RPA is expected to expand, covering more complex processes and integrating with other technologies like AI and machine learning for predictive analytics and decision-making support. This integration will further personalize the employee experience, improve workforce planning, and enhance talent management strategies.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

                <div className=' leading-normal'>
                    <div className='text-[39px] leading-none font-medium pb-5'> Conclusion</div>

                    <div className='font-thin leading-normal text-[18px]'>
                        <div className='pb-5 text-pretty' >
                            RPA in HR is not just about automation; it's about enabling HR professionals to contribute more strategically to the organization while improving the overall employee experience. By adopting RPA, HR departments can not only achieve operational excellence but also play a pivotal role in driving organizational growth and innovation. As we move forward, the synergy between RPA, AI, and human insights will redefine the future of HR, making it more efficient, responsive, and strategic.
                        </div>
                    </div>
                </div>
                <div className='h-[101px]'></div>

            </div>

            <div className='h-[208px]'></div>

            <div className='px-[80px]'>
                <CommentForm />
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

export default Insight3