import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { RiArrowRightSLine } from "react-icons/ri";
import Navbar from '../../Components/Navbar'
import NameForm from '../../Components/CareerComponents/NameForm';
import ContactForm from '../../Components/CareerComponents/ContactForm';
import EducationForm from '../../Components/CareerComponents/EducationForm';
import ExperienceForm from '../../Components/CareerComponents/ExperienceForm';
import PositionForm from '../../Components/CareerComponents/PositionForm';

const Career = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const storedStep = sessionStorage.getItem('currentStep');
    const [step, setStep] = useState(storedStep ? parseInt(storedStep) : 1);
    const nameFormRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('currentStep', step);
    }, [step]);

    const nextStep = () => {
        setStep(step + 1);
    };

    const previousStep = () => {
        setStep(step - 1);
    };

    const scrollToNameForm = () => {
        nameFormRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    console.log(step);

    return (
        <div>
            {step === 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                >
                    <div className='relative'>
                        {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
                        <nav className="absolute top-0 left-0 right-0 z-20 ">
                            <Navbar setShowOverlay={setShowOverlay} />
                        </nav>

                        <div className=' relative'>
                            <img className='w-full max-h-[1024px]' src="/CareerBackground.png" alt="" />
                            <div className='grid place-content-center text-white absolute top-0 right-0 left-0 pt-[100px]'>
                                <div className='text-[232px] font-medium'>
                                    <div className=''>
                                        Be part of Us
                                    </div>
                                </div>
                                <div className='grid place-content-center pb-8 text-[25px] font-thin'>Lorem, ipsum dolor sit amet consectetur</div>
                                <div className='grid place-content-center font-medium '>
                                    <div className='flex gap-3'>
                                        <button onClick={scrollToNameForm} className='text-[16px] font-medium' >Join Now</button>
                                        <div className='text-2xl grid place-content-center'><RiArrowRightSLine /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div ref={nameFormRef} className='bg-black h-[1024px]'>
                            <NameForm onClick={nextStep} />
                        </div>
                    </div>
                </motion.div>
            )}

            {step === 2 && (
                <div className='bg-black'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0 }}
                    >
                        <ContactForm forward={nextStep} backward={previousStep} />
                    </motion.div>
                </div>
            )}

            {step === 3 && (
                <div className='bg-black'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0 }}
                    >
                        <EducationForm forward={nextStep} backward={previousStep} />
                    </motion.div>

                </div>
            )}

            {step === 4 && (
                <div className='bg-black'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0 }}
                    >
                        <ExperienceForm forward={nextStep} backward={previousStep} />
                    </motion.div>
                </div>
            )}

            {step === 5 && (
                <div className='bg-black'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0 }}
                    >
                        <PositionForm forward={nextStep} backward={previousStep} />
                    </motion.div>
                </div>
            )}
        </div >
    )
}

export default Career