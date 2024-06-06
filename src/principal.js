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
import admissionsbanner from "./admissionsbanner.png";


const Principal = () => {


    return(
        <div className=" bg-[#A5BCC9] overflow-auto overflow-x-hidden min-h-screen felx flex-col">

            <div className="bg-[#183957] w-full py-6">


                <div className="px-12 translate-y-10">
                    <button
                        className="font-jomolhari text-black rounded bg-[#BFD4E7] hover:duration-200 hover:border-sky-200 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#A5BCC9,0_0_15px_#A5BCC9,0_0_30px_#A5BCC9] hover:scale-105 duration-200  w-24 h-12"> MENU
                    </button>
                </div>
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
            <div className="bg-[#183957] w-full py-6 -translate-y-32">
                <h1 className="text-[#C0DCE3] font-bold font-jomolhari text-4xl mb-4  px-12">PRINCIPAL'S MESSAGE</h1>
            </div>
            <div className="px-8">
            </div>
            <div className=" translate-x-60 text-justify">
                <p className="text-neutral-800">
                    Pedagogy is an art. It has to come from within like any art. Gone are the days when the pupils sat
                    in dumb astonishment and nervous reverence in front of a ‘Guru’. Now, a new era of intrapersonal
                    relationship between the teacher and the taught has been ushered in; where at times even the teacher
                    becomes the learner. The ‘tunnel vision’ does not exist anymore. With the advent of the computer
                    technology this task has been made even easier than ever, but at the same time, demanding a great
                    deal of work and perseverance.
                    <br/>
                    A class room situation should be a situation where there is a healthy conversation that is carried
                    on
                    between the teacher and the taught, a participatory method of teaching. Each day would then add a
                    new
                    dimension to the child’s profile giving him an opportunity to meet and accomplish new challenges.
                    Teachers are expected to therefore, equip themselves with energy, integrity, creativity, enthusiasm
                    and most importantly an openness of mind, which is vital for the development of the school in
                    general
                    and the child in particular.
                    <br/>
                    The participation does not stop with the teacher and the taught but goes beyond the class room.
                    An extended relationship is being established with the parents, who are now considered partners in
                    the bringing up of the children. To comprehend correctly, the complexity and the composition of
                    teaching
                    is the name of the game. The term “Flipped class room” applies to the extended learning that happens
                    at
                    home. When a child goes up on to a podium or goes up to receive a prize, more often than not, the
                    hard
                    work of a parent behind the scene is what is evident.
                </p>
            </div>
            {/*<div className="bg-[#183957] w-full py-6 translate-y-[500px]">*/}
            {/*</div>*/}
        </div>

    )
}
export default Principal

