import React, { useState } from 'react';

const Hero = ({ title, description, imageSrc, width }) => {
    return (
        <div className=" pt-20">
            {/* <div className='container mx-auto flex '>
                <div className='flex-none w-800 '>
                    <img
                        src={imageSrc}
                        alt="Hero Background"
                        className="object-cover rounded-lg shadow-lg "
                    />
                </div>


                <div className=" absolute mt-70 ml-72 flex-col flex-1 top-70 ">
                    <h1 className="text-7xl font-light leading-none pl-50">{title}</h1>
                </div>
            </div> */}

            {/* <div className='relative border'>
                <img src={imageSrc} alt="" />


                <div className='absolute inset-0 text-7xl text-white font-medium'>
                    <div className='border'>
                        {title}
                    </div>

                </div>
            </div> */}

            <div className="w-full relative grid place-content-end">

                <img src={imageSrc} alt="" className='absolute' />

                <div className="self-stretch h-[610px] flex-col justify-end items-end gap-8 flex pl-32 ml-32 z-50">

                    <div className="self-stretch justify-start items-center inline-flex">

                        <div className="grow shrink basis-0 h-[458px] justify-end items-center flex ">
                            <div className="grow shrink basis-0 self-stretch bg-gradient-to-r from-black to-black" />
                        </div>

                        <div className="w-[982px]  self-stretch justify-start items-center gap-2.5 flex">
                            <div className="grow shrink basis-0 text-neutral-100 text-[76px] font-medium font-['Helvetica Neue'] leading-[83.60px]">{title}</div>
                        </div>

                    </div>


                    <div className="w-[982px]  justify-start items-center gap-[68px] inline-flex">
                        <div className="grow shrink basis-0 text-zinc-300 text-base font-light font-['Helvetica Neue'] leading-normal tracking-wide">{description}</div>
                    </div>


                </div>
            </div>


        </div>
    );

};

export default Hero;