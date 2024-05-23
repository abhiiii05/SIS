// import React, {useState} from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import SignInWithGoogle from './SignInWithGoogle';
import './index.css'
// import schoolLogo from  './trial-removebg-preview.png'
import bannermainImage from './bannermain.png'
import landing2 from'./landing 2.png'

 function App() {
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
                 <button className= "text-amber-50">click me</button>
                 <h1 className="text-white font-bold font-jomolhari translate-x-52 text-4xl">SHARJAH INDIAN SCHOOL JUWAIZA</h1>
                 <h1 className="text-white translate-x-52">EDUCATE | ENLIGHTEN | EMPOWER</h1>
             </div>
             <div>
                 <img src={bannermainImage} alt="main banner" className="w-full"/>
             </div>
             <div className="px-8 py-12">
                 <h1 className="text-black font-bold font-jomolhari text-4xl mb-4">
                     SHARJAH INDIAN SCHOOL JUWAIZA
                 </h1>
                 <br/>
                 <p className="text-black leading-relaxed font-jomolhari text-lg">
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

                 <img src={landing2} alt = " image" className="translate-x-full -translate-y-64 scale-90 ml-60 "/>
             </div>


         </div>
     )
 }


export default App;


