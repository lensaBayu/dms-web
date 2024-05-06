import React from 'react'

const NameForm = ({ onClick }) => {


    const continueStep = () => {
        try {
            onClick();
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
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                    <div className='h-[5px] bg-neutral-800 w-full'></div>
                </div>

                <div className='px-[225px]'>
                    <div className='mt-[84px] font-medium text-[52px] text-white'>First of all, can we know
                        <span className='text-transparent bg-gradient-to-r from-aqua to-babyaqua bg-clip-text'> your name?</span>
                    </div>
                    <div className='flex flex-col gap-[20px] mt-[104px] text-white'>
                        <label htmlFor="fullName" className='text-[18px]'>Full Name*</label>
                        <input type="text" id='fullName' name='fullName' className='text-[25px] h-[59px] p-3 border-b border-neutral-700 text-medium outline-none bg-black focus:bg-neutral-800 focus:border-white transition-colors duration-300' />
                        <div className='flex place-content-end'>
                            <button className='bg-white h-[48px] w-[115px] text-black py-[12px] px-[24px] mt-[50px] text-[16px] font-medium' onClick={continueStep}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NameForm