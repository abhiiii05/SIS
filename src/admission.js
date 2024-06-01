import './index.css'
import schoolLogo from  './trial-removebg-preview.png'
import bannermainImage from './bannermain.png'
import landing2 from'./landing 2.png'
import image2 from './image2.png'
import button1 from './buttton1.png'
import banner2 from './banner2.png'
// import {Link} from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import App from "./App";
import admissionsbanner from './admissionsbanner.png'


import React from 'react';

const AdmissionsPage = () => {
    return (
        <div className=" bg-[#A5BCC9] overflow-auto overflow-x-hidden min-h-screen felx flex-col">

            <div className="bg-[#183957] w-full py-6">


                <button className="text-amber-50">click me</button>
                <h1 className="text-white font-bold font-jomolhari translate-x-72 text-4xl ">SHARJAH INDIAN SCHOOL
                    JUWAIZA</h1>

                <h1 className="text-white translate-x-72 ">EDUCATE | ENLIGHTEN | EMPOWER</h1>


            </div>
            <div>
                <img src={schoolLogo} alt="logo" className="scale-50 w-32 h-32 -translate-y-32 translate-x-44"/>
            </div>
            <div>
                <img src={admissionsbanner} alt="main banner" className="w-full transform-gpu -translate-y-32"/>
            </div>
            <div className="bg-[#183957] w-full py-6 -translate-y-32"></div>
            <div className="px-8">
                <h1 className="text-black font-bold font-jomolhari text-4xl mb-4 underline">
                    Admissions
                </h1>
                <h2 className="text-black font-jomolhari text-xl mb-4 py-12">SCHOOL UNIFORM</h2>
                <h4 className="text-black font-jomolhari text-xl mb-4 -my-10">Every child must come to the school neatly dressed
                    in full school uniform and must wear black shoes with normal heels. Plain white canvas shoes should be used
                    for Physical Education.</h4>
                <div>
                    <h2 className="text-black font-jomolhari text-xl mb-4 py-12">SCHOOL TRANSPORT</h2>
                    <h4 className="text-black font-jomolhari text-xl mb-4 -my-10 text-justify">The school provides transport
                        facilities to different areas in
                        Sharjah, Al Ghusais and Ajman. The bus stops are fixed after a thorough survey of the situations
                        and any request for change
                        of bus stops due to change of residence shall be considered subject to the satisfaction of the
                        head of the institution.</h4>
                    <br/>
                    <h4 className="text-black font-jomolhari text-xl mb-4 -my-10 py-12 text-justify">The corporation or little enterprise proprietor might maybe not opt
                        to wait, nevertheless at the similar time it shouldn’t really be anticipated they’ll focus on work as a umpire.</h4>
                    <br/>
                    <h4 className="text-black font-jomolhari text-xl mb-4 -my-10 py-12 text-justify ">Although the structure transforms based on the needs of
                        the unique situation, the complete approach the correspondence is generally to be written is easy to get. The crucial basis
                        writing a permission letter would be to search for another person’s acceptance for some task that you undoubtedly have to
                        tackle.</h4>
                    <h4 className="text-black font-jomolhari text-xl mb-4  text-justify ">Once the name is enrolled for bus transport no request for discontinuation will be entertained except at the beginning of the term.</h4>
                    <div>
                        <ol className="py-12">
                            <li className="text-black font-jomolhari text-xl mb-4  text-justify ">1st Term :: April, May& June</li>
                            <li className="text-black font-jomolhari text-xl mb-4  text-justify ">2nd Term :: September, October November & December</li>
                            <li className="text-black font-jomolhari text-xl mb-4  text-justify ">3rd Term :: January, February & March</li>
                        </ol>
                    </div>

                </div>

            </div>
            <div className="mt-auto overscroll-x-none ">
                <footer className="bg-[#183957] text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="hover:underline" href="#">
                                            ADMISSION
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline" href="#">
                                            LOGIN
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:underline" href="#">
                                            CIRCULARS
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
            </div>
        </div>

    );
};

export default AdmissionsPage;
