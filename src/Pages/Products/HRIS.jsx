import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Card from '../../Components/Card';
import Cardv2 from '../../Components/Cardv2';



function HRIS() {
    const [showOverlay, setShowOverlay] = React.useState(false);
    return (

        <div className='bg-black relative'>
            {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
            <nav className='absolute top-0 left-0 right-0 z-10'>
                <Navbar setShowOverlay={setShowOverlay} />
            </nav>

            <div className='pt-16 mx-15'>
                <Hero
                    title="Human Resources Information System"
                    description="In an era marked by rapid technological advancement and shifting workforce dynamics, a Human Resources Information System (HRIS) stands as a pivotal foundation for modern HR management."
                    imageSrc="/Hero1.png"
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

            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default HRIS