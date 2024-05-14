import React from 'react'
import { PiUploadSimple } from "react-icons/pi";


const EducationForm = ({ forward, backward }) => {

    const continueStep = () => {
        try {
            forward();
            window.scrollTo(0, 0); // Set scroll position to top of the page
        } catch (error) {
            console.log(error);
        }
    }

    const backStep = () => {
        try {
            backward();
            window.scrollTo(0, 0); // Set scroll position to top of the page
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='mx-15 pt-[96px]'>

                <div className='flex gap-[12px]'>
                    <div className='h-[5px] bg-white w-full'></div>
                    <div className='h-[5px] bg-white w-full'></div>
                    <div className='h-[5px] bg-white w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                </div>

                <div className='px-[225px]'>
                    <div className='mt-[84px] font-medium text-[52px] text-white'>
                        Let’s talk about your
                        <span className='text-transparent bg-gradient-to-r from-aqua to-babyaqua bg-clip-text'> educational background </span>
                    </div>
                    <div className='flex flex-col gap-[20px] pb-[160px] mt-[104px] text-white'>

                        <label htmlFor="education" className='text-[18px]'>Education*</label>
                        <input type="text" id='education' name='education' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
                        <div className='h-[64px]'>
                        </div>
                        <label htmlFor="school_univ" className='text-[18px]'>School/University*</label>
                        <input type="text" id='school_univ' name='school_univ' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
                        <div className='h-[64px]'>
                        </div>
                        <label htmlFor="gpa" className='text-[18px]'>GPA*</label>
                        <input type="number" id='gpa' name='gpa' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
                        <div className='h-[64px]'>
                        </div>
                        <label htmlFor="transcript" className='text-[18px]'>Transcript</label>
                        <input type="file" id='transcript' name='transcript' className='hidden' />

                        <button className='grid place-content-center text-[16px] h-[59px] border border-neutral-700 text-medium bg-black ' onClick={() => document.getElementById('transcript').click()}>
                            <div className='flex gap-3'>
                                <div className='grid place-content-center text-2xl'>
                                    <PiUploadSimple />
                                </div>
                                <div>Upload File</div>
                            </div>
                        </button>
                        <div>
                            <ul className=' font-thin list-disc px-5'>
                                <li>5 MB Maximum size</li>
                                <li>File Format: PDF</li>
                            </ul>
                        </div>
                        <div className='flex place-content-end gap-[16px]'>
                            <button className='bg-neutral-700 h-[48px] w-[115px] text-white py-[12px] px-[24px] mt-[50px] text-[16px] font-medium' onClick={backStep}>Back</button>
                            <button className='bg-white h-[48px] w-[115px] text-black py-[12px] px-[24px] mt-[50px] text-[16px] font-medium' onClick={continueStep}>Continue</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EducationForm