import React, { useEffect, useState, useRef } from 'react';
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ setShowOverlay }) => {
    const [showDropdown, setShowDropdown] = useState(null);

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeDropdown();
        }
    };

    const closeDropdown = () => {
        setShowDropdown(null);
        setShowOverlay(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdownName) => {
        if (showDropdown === dropdownName) {
            closeDropdown();
        } else {
            closeDropdown(); // Tutup dropdown sebelum menampilkan yang baru
            setShowDropdown(dropdownName);
            setShowOverlay(true);
        }
    };

    return (
        <>
            <div className='text-white flex justify-between mx-15 pt-7 pb-4 h-[92px]'>
                <Link to={"/"} >
                    <div className=''><img src="/Logo DMS.png" alt="Logo" /></div>
                </Link>
                <div className='flex gap-5 text-base'>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1' onClick={() => toggleDropdown('product')}>
                            <div>
                                Product
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1' onClick={() => toggleDropdown('whoWeAre')}>
                            <div>
                                Who we are
                            </div>
                            <div className='grid place-content-center text-xl'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1'>
                            <div>
                                Insight
                            </div>
                            <div className='grid place-content-center text-xl'></div>
                        </div>
                    </div>
                    <div className='grid place-content-center cursor-pointer'>
                        <div className='flex gap-1' onClick={() => toggleDropdown('career')}>
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

            <AnimatePresence>
                {showDropdown === 'product' && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        className=' bg-white bg-opacity-20 px-24 py-14 grid grid-cols-4  mt-5 text-white font-thin backdrop-blur-2xl gap-10'
                    >
                        <Link to={"/product/digitalengine"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Digital Engineering & Manufacturing</div>
                        </Link>
                        <Link to={"/product/strategicmanage"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Strategic Managed Services</div>
                        </Link>
                        <Link to={"/product/businessprocess"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Business Process Automation</div>
                        </Link>
                        <Link to={"/product/bigdata"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Big Data & Artificial Intelligence</div>
                        </Link>
                        <Link to={"/product/techtrans"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Technology Transformation</div>
                        </Link>
                        <Link to={"/product/changemanage"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Change Management</div>
                        </Link>
                        <Link to={"/product/hris"}>
                            <div className="py-2 hover:underline hover:font-normal ease-in-out cursor-pointer duration-200">Human Resources Information System</div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showDropdown === 'whoWeAre' && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        className=' bg-white bg-opacity-20 px-24 py-14 grid grid-cols-4  mt-5 text-white font-thin backdrop-blur-2xl gap-10'
                    >
                        <div ref={dropdownRef} className=' bg-teal-950 px-24 py-14  mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
                            <ul>
                                <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">About Us</li>
                                <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Team</li>
                                <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Culture</li>
                                <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Impact</li>
                                <li className="py-2 hover:bg-zinc-500 hover:text-black cursor-pointer duration-200">Our Partners</li>
                            </ul>
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>


            {showDropdown === 'career' && (
                <div ref={dropdownRef} className=' bg-teal-950 px-24 py-14  mt-5 text-white font-thin bg-opacity-30 backdrop-blur-3xl'>
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

export default Navbar;
