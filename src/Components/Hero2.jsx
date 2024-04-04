import React from 'react'

const Hero2 = ({ image, title, description }) => {
    return (
        <div>
            <div className='relative'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='flex place-content-end place-items-center absolute inset-0 text-neutral-100 text-[76px] font-medium'>
                    <div className='w-[982px]'>
                        {title}
                    </div>
                </div>
            </div>
            <div className='mt-8 flex place-content-end'>
                <div className='text-zinc-300 w-[982px]'>{description}
                </div>
            </div>
        </div>
    )
}

export default Hero2