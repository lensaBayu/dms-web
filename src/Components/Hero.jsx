import React, { useState } from 'react';

const Hero = ({ title, description, imageSrc }) => {
    return (
        <div className="relative bg-black text-white min-h-screen flex items-center">
            <div className='container mx-auto flex '>
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
            </div>
        </div>
    );

};

export default Hero;