import React from 'react'

const Comments = () => {
    return (
        <>
            <div className='bg-stone-950 px-[32px] py-[24px]'>

                <div className='flex text-white'>
                    <div className='h-[100px] w-[100px] border rounded-full bg-white'></div>
                    <div className='grid place-content-center ml-10'>
                        <div className='text-[18px] font-medium'>Name</div>
                        <div className='text-[16px] font-thin'>Description</div>
                    </div>
                </div>
                {/* <div className='h-[1.5px] bg-neutral-600 my-[32px]'></div> */}
            </div>
        </>

    )
}

export default Comments