import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = ({ setShowOverlay }) => {
    const [showProduct, setShowProduct] = useState(false);

    const handleClickOutside = (event) => {
        const dropdown = document.getElementById('dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            setShowProduct(false);
            setShowOverlay(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const toggleDropdown1 = () => {
        setShowProduct(!showProduct);
        setShowOverlay(!showProduct);
    };


    return (
        <>
            <div className='text-white flex justify-between mx-15 pt-7 pb-4'>
                <Link to={"/"}>
                    <div className=''><img src="/Logo DMS.png" alt="Logo" /></div>
                </Link>
                <div className='flex gap-5 text-base'>
                    <div className='grid place-content-center '>
                        <div className='flex gap-1' onClick={toggleDropdown1}>
                            <div>
                                Product                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <div className='flex gap-1'>
                            <div>
                                Who we are
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <div className='flex gap-1'>
                            <div>
                                What we think
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <div className='flex gap-1'>
                            <div>
                                Careers
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                </div>
                <button className='grid place-content-center'>
                    {/* <IoIosSearch className=' text-2xl' /> */}
                    <img src="/Search.png" alt="" />
                </button>
            </div>
            {showProduct && (
                <div
                    id="dropdown"
                    className=' bg-teal-950 px-24 z-50 py-14 mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
                    <ul>
                        <li className="py-2">
                            <Link to={"/product/digitalengineering"}>
                                <div className='inline-block'>
                                    Digital Engineering & Manufacturing
                                </div>
                            </Link>
                        </li>
                        <li className="py-2">
                            <div className='inline-block'>
                                Strategic Managed Services
                            </div>
                        </li>
                        <li className="py-2">
                            <Link to={"/product/automation"}>
                                <div className='inline-block'>
                                    Business Process Automation
                                </div>
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to={"/product/bigdata"}>
                                <div className='inline-block'>
                                    Big Data & Artificial Intelligence
                                </div>
                            </Link>
                        </li>
                        <li className="py-2">
                            <div className='inline-block'>
                                Technology Transformation
                            </div>
                        </li>
                        <li className="py-2">
                            <div className='inline-block'>
                                Change Management
                            </div>
                        </li>
                        <li className="py-2">
                            <div className='inline-block'>
                                Human Resources Information System
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar