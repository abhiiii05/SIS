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
            <div>
            </div>
        </div>
    );
};

export default AdmissionsPage;
