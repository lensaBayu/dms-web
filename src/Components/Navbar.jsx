import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = ({ setShowOverlay }) => {
    const [showProduct, setShowProduct] = useState(false);
    const [showWhoWeAre, setShowWhoWeAre] = useState(false);
    const [showCareer, setShowCareer] = useState(false);

    const handleClickOutside = (event) => {
        const dropdown = document.getElementById('dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            setShowProduct(false);
            setShowWhoWeAre(false);
            setShowCareer(false);
            setShowOverlay(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProduct, showWhoWeAre, showCareer]);


    const toggleDropdown1 = () => {
        setShowProduct(!showProduct);
        setShowOverlay(!showProduct);
    };
    const toggleDropdown2 = () => {
        setShowWhoWeAre(!showWhoWeAre);
        setShowOverlay(!showWhoWeAre);
    };
    const toggleDropdown3 = () => {
        setShowCareer(!showCareer);
        setShowOverlay(!showCareer);
    };

    return (
        <>
            <div className='text-white flex justify-between mx-15 pt-7 pb-4'>
                <Link to={"/"} >
                <div className=''><img src="/Logo DMS.png" alt="Logo" /></div>
                </Link>
                <div className='flex gap-5 text-base'>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1' onClick={toggleDropdown1}>
                            <div>
                                Product                            
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1'onClick={toggleDropdown2}>
                            <div>
                                Who we are
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1'>
                            <div>
                                What we think
                            </div>
                            <div className='grid place-content-center text-xl'></div>
                        </div>
                    </div>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1' onClick={toggleDropdown3}>
                            <div>
                                Careers
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                </div>
                <button className='grid place-content-center'>
                    {/* <IoIosSearch className=' text-2xl' /> */}
                    <img src="./Search.png" alt="" />
                </button>
            </div>
            {showProduct && (
                <div
                    id="dropdown"
                    className=' bg-teal-950 px-24 py-14  mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
                    <ul>
                        <Link to={"/product/digitalengine" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Digital Engineering & Manufacturing</li>
                        </Link>
                        <Link to={"/product/strategicmanage" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Strategic Managed Services</li>
                        </Link>
                        <Link to={"/product/businessprocess" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Business Process Automation</li>
                        </Link>
                        <Link to={"/product/bigdata" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Big Data & Artificial Intelligence</li>
                        </Link>
                        <Link to={"/product/techtrans" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Technology Transformation</li>
                        </Link>
                        <Link to={"/product/changemanage" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Change Management</li>
                        </Link>
                        <Link to={"/product/hris" }>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Human Resources Information System</li>
                        </Link>
                    </ul>
                </div>
            )}
            {showWhoWeAre && (
                <div id="dropdown1"
                    className=' bg-teal-950 px-24 py-14  mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
                    <ul>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">About Us</li>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Team</li>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Culture</li>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Impact</li>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Partners</li>
                    </ul>
                </div>
            )}
            {showCareer && (
                <div id="dropdown2"
                    className=' bg-teal-950 px-24 py-14  mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
                    <ul>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Why DMS</li>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Job Openings</li>
                        <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Internship Program</li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar