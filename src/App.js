// import React, {useState} from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import SignInWithGoogle from './SignInWithGoogle';
import './index.css'
// import schoolLogo from  './trial-removebg-preview.png'
import bannermainImage from './bannermain.png'
import landing2 from'./landing 2.png'
import image2 from './image2.png'
import button1 from './buttton1.png'
// import {Link} from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';



function App() {
    // +
//     const[isLoggedin, setIsLoggedIn] = useState(false);
//     const successfulSignIn = (response) => {
//         console.log( "successfully signed in : ", response);
//         setIsLoggedIn(true)
//         window.location.replace('.src/welcome.js')
//      }
//     return (
//         <div className="min-h-screen h-screen bg-[#183957] flex flex-col items-center justify-center relative">
//             <div className="absolute -top-44 -left-44 circle-top-left"></div>
//             <div className="absolute -bottom-44 -right-44 circle-bottom-right"></div>
//             <GoogleOAuthProvider clientId="50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com">
//                 <div className="App">
//                     <h1 className="text-white font-bold font-jomolhari mb-8 bg-[#183957] py-4 text-center text-4xl">
//                         SHARJAH INDIAN SCHOOL JUWAIZA
//                     </h1>
//                     <img src={schoolLogo} alt="School Logo" className="w-32 translate-x-72 mb-8"/>
//                     {isLoggedin ? (
//                         <h1></h1>
//                     ) : (
//                         <SignInWithGoogle onSuccessfulSignIn={successfulSignIn}/>
//                     )}
//                 </div>
//             </GoogleOAuthProvider>
//         </div>
//
//     )
//         ;
// }
     //translate-x-52
     //min-h-screen h-screen

     return (
         <div className=" bg-[#A5BCC9] overflow-auto overflow-x-hidden">
             <div className="bg-[#183957] w-full py-6">
                 <button className="text-amber-50">click me</button>
                 <h1 className="text-white font-bold font-jomolhari translate-x-52 text-4xl">SHARJAH INDIAN SCHOOL
                     JUWAIZA</h1>
                 <h1 className="text-white translate-x-52">EDUCATE | ENLIGHTEN | EMPOWER</h1>
             </div>
             <div>
                 <img src={bannermainImage} alt="main banner" className="w-full transform-gpu"/>
             </div>
             <div className="bg-[#183957] w-full py-6"></div>
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
             <div className="bg-[#C0DCE3] w-[610px] h-72 translate-x-72 ml-96 -translate-y-[565px] rounded-lg px-8 py-4 drop-shadow-xl">
                 <h1 className="font-bold font-jomolhari text-[#183957]">OUR VISION</h1>
                 <text className="font-jomolhari text-[#183957]">Educate Enlighten Empower</text>
                 <br/>
                 <br/>
                 <br/>
                 <h1 className="font-bold font-jomolhari text-[#183957]">OUR MISSION</h1>
                 <text className="font-jomolhari text-[#183957]">To Mould Thinkers, Planners, Readers, Learners and Achievers</text>
                 <br/>
                 <br/>
                 <br/>
                 <h1 className="font-bold font-jomolhari text-[#183957]">OUR AIM</h1>
                 <text className="font-jomolhari text-[#183957]">Impart education, laying stress on the intellectual, physical, mental, social, asthetic and moral
                     development of the children.
                 </text>
             </div>

         </div>

     )
}


export default App;


