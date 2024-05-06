import React from 'react'

const ContactForm = ({ forward, backward }) => {

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
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                </div>

                <div className='px-[225px]'>
                    <div className='mt-[84px] font-medium text-[52px] text-white'>
                        <span className='text-transparent bg-gradient-to-r from-aqua to-babyaqua bg-clip-text'>Hello Michael, </span>can you tell us a little more about you?
                    </div>
                    <div className='flex flex-col gap-[20px] pb-[160px] mt-[104px] text-white'>

                        <label htmlFor="age" className='text-[18px]'>Age*</label>
                        <input type="number" id='age' name='age' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
                        <div className='h-[64px]'>
                        </div>
                        <label htmlFor="email" className='text-[18px]'>Email*</label>
                        <input type="email" id='email' name='email' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
                        <div className='h-[64px]'>
                        </div>
                        <label htmlFor="phoneNumber" className='text-[18px]'>Phone Number*</label>
                        <input type="tel" id='phoneNumber' name='phoneNumber' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
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

export default ContactForm