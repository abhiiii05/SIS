// import React, {useState} from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import SignInWithGoogle from './SignInWithGoogle';
import './index.css'
import schoolLogo from  './trial-removebg-preview.png'
import bannermainImage from './bannermain.png'
import landing2 from'./landing 2.png'
import image2 from './image2.png'
import button1 from './buttton1.png'
import banner2 from './banner2.png'
// import {Link} from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import Admission from "./admission"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import useScrollToTop from './useScrollToTop';




const Landing = () => {
    useScrollToTop();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handleAdmissionClick = () => {
        navigate('/admissions'); // Programmatic navigation using useNavigate
    };

    const handleCurriculumClick = () => {
        navigate('/curriculum'); // Programmatic navigation using useNavigate
    };


//function App() {
    return (
        <div className=" bg-[#A5BCC9] overflow-auto overflow-x-hidden min-h-screen felx flex-col ">
            <div className="bg-[#183957] w-full py-6">
                <div className="px-12 translate-y-10">
                    <button
                        className="font-jomolhari -translate-y-8 text-black rounded bg-[#BFD4E7] hover:duration-200 hover:border-sky-200 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#A5BCC9,0_0_15px_#A5BCC9,0_0_30px_#A5BCC9] hover:scale-105 duration-200 w-24 h-12"
                        onClick={toggleSidebar}
                    >
                        MENU
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-[#f1f1f1] shadow-md z-10 transition-transform duration-300 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`} ref={sidebarRef}
            >
                <div className="p-4">
                    <ul>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                                Admissions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                                Curriculum
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                                Login
                            </a>
                        </li>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>
            </div>


                <h1 className="text-white font-bold font-jomolhari translate-x-72 -translate-y-16 text-4xl ">SHARJAH INDIAN SCHOOL
                    JUWAIZA</h1>

                <h1 className="text-white translate-x-72 -translate-y-16">EDUCATE | ENLIGHTEN | EMPOWER</h1>
        <div></div>

            <div><img src={schoolLogo} alt="logo" className="scale-50 w-32 h-32 -translate-y-44 translate-x-44"/></div>
            <div>
                <img src={bannermainImage} alt="main banner" className="w-full transform-gpu -translate-y-32"/>
            </div>
            <div className="bg-[#183957] w-full py-6 -translate-y-32"></div>
            <div className="px-8 py-12">
                <h1 className="text-black font-bold font-jomolhari text-4xl mb-4">
                    SHARJAH INDIAN SCHOOL JUWAIZA
                </h1>
                <br/>
                <p className="text-black leading-relaxed font-jomolhari text-lg text-justify">
                    Sharjah Indian School is a Senior Secondary School, Owned and Managed by
                    <br/>
                    Indian Association Sharjah. Established in 1979 with
                    <br/>
                    280 pupils and 13 teachers, the school stands as a landmark in the annals of the Indo-UAE
                    <br/>
                    friendship. Today after 43 years, the school
                    <br/>
                    has a strength of 5528 (total) students and 305 (total) teachers.
                    <br/>
                    The school is approved and licensed by the Sharjah Private Education Authority (SPEA) ,
                    <br/>
                    UAE and is affiliated to Central Board of Secondary Education New Delhi, India.
                </p>
                <img src={landing2} alt=" image"
                     className="translate-x-full rounded-lg -translate-y-64 scale-90 ml-60 transform-gpu hover:duration-700 hover:border-sky-200 hover:scale-100 duration-700 drop-shadow-xl"/>
            </div>
            {/*<button onClick={handleButtonClick} className="translate-x-96 ml-96">*/}
            {/*    <div className="relative animate-bounce">*/}
            {/*        <img src={button1} alt="button1" className="absolute inset-0 scale-90 cursor-pointer"/>*/}
            {/*    </div>*/}
            {/*</button>*/}
            <div className="translate-x-96 -translate-y-96 ml-64 w-80 h-80">
                <button
                    className="relative p-0 bg-transparent border-none cursor-pointer scale-50 ">
                    <Link
                        to="target-element"
                        smooth={true}
                        duration={1500}
                        className="cursor-pointer"
                    >
                        <img src={button1} alt="button1" className="scale-50 "/>
                    </Link>
                </button>
            </div>
            <div className="bg-[#183957] w-full py-6 -translate-y-96 -my-20"></div>

            <div id="target-element">
                <img src={image2} alt=" image"
                     className="-translate-x-52 rounded-lg -translate-y-64 scale-90 ml-60 transform-gpu hover:duration-700 hover:border-sky-200 hover:scale-100 duration-700 drop-shadow-xl	"/>
            </div>
            <div
                className="bg-[#C0DCE3] w-[610px] h-72 translate-x-72 ml-96 -translate-y-[565px] rounded-lg px-8 py-4 drop-shadow-xl">
                <h1 className="font-bold font-jomolhari text-[#183957]">OUR VISION</h1>
                <text className="font-jomolhari text-[#183957]">Educate Enlighten Empower</text>
                <br/>
                <br/>
                <br/>
                <h1 className="font-bold font-jomolhari text-[#183957]">OUR MISSION</h1>
                <text className="font-jomolhari text-[#183957]">To Mould Thinkers, Planners, Readers, Learners and
                    Achievers
                </text>
                <br/>
                <br/>
                <br/>
                <h1 className="font-bold font-jomolhari text-[#183957]">OUR AIM</h1>
                <text className="font-jomolhari text-[#183957]">Impart education, laying stress on the intellectual,
                    physical, mental, social, asthetic and moral
                    development of the children.
                </text>

            </div>

            <div className="bg-[#183957] w-full py-6 -translate-y-[500px]"></div>
            <div>
                <img src={banner2} alt="BANNER 2" className="w-full transform-gpu -translate-y-[450px]"/>
                <div className="mt-auto overscroll-x-none ">
                    <footer className="bg-[#183957] text-white py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link to="/admissions" className="hover:underline" onClick={handleAdmissionClick} scrollBehavior="smooth">
                                                ADMISSION
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" href="#">
                                                LOGIN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="hover:underline" onClick={handleCurriculumClick}>
                                                CURRICULUM
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" href="#">
                                                USEFUL LINKS (HOLD)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" href="#">
                                                TC DOWNLOAD
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" href="#">
                                                FEES
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:underline" href="#">
                                                PRINCIPAL'S MESSAGE
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                </div>
                            </div>

                        </div>
                        <div className="gap-8 ">
                            <div className=" mx-96 translate-x-60 -translate-y-[270px] ">
                                <h3 className="text-xl font-semibold">CONTACT US</h3>
                                <br/>
                                <ul className="space-y-2">
                                    <li>
                                        P.O.Box 2324, Sharjah ,United Arab Emirates
                                    </li>
                                    <br/>
                                    <li>
                                        +971 6 5665775
                                    </li>
                                    <br/>
                                    <li>
                                        mail@sisjuwaiza.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="gap-8">
                            <div className=" mx-96 translate-x-[800px] -translate-y-[460px] ">
                                <h3 className="text-xl font-semibold">LOCATE US</h3>
                                <br/>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.47898876750813!2d55.616419242857454!3d25.281892001912105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef58d85e557a4f9%3A0xf31eba69666c83c2!2sSharjah%20Indian%20School%20-%20Boys%20Branch%2C%20Juwaiza!5e0!3m2!1sen!2sae!4v1717161443480!5m2!1sen!2sae"
                                    className="w-72 h-52 bg-[#A5BCC9] "
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </footer>
                    {/*// <div className="bg-[#183957] w-full py-6 felx felx-col -translate-y-64 mt-auto h-[200px] "></div>*/}
                </div>

            </div>
        </div>

    )
}
export default Landing;