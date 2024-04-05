import React, { useState } from 'react'


const Dropdown = ({ Number, Title, percent, description, border = true }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className={`${isHovered ? "h-[240px]" : "h-[102px]"} transition-all ease-in-out duration-500 flex my-10 text-white  font-extralight gap-3 ${border ? "border-b border-neutral-800" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div></div>
                <div className="flex flex-col ">
                    <div className=' w-[306px] text-[52px] grid place-content-start '>
                        {Number}
                    </div>
                </div>
                <div className='w-full flex flex-col'>
                    <div className=''>
                        {isHovered ?
                            <div className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-500 grid-cols-2 h-[200px] grid place-content-center gap-32`}>
                                <div className='text-[200px] font-normal'> {percent}</div>
                                <div className='grid place-content-center gap-5'>
                                    <div className='text-white font-medium text-lg'>{Title}</div>
                                    <div className='text-zinc-300'>{description}</div>
                                </div>
                            </div>
                            :
                            <div className='text-[52px]'>
                                {Title}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Dropdown