import React, {useState} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInWithGoogle from './SignInWithGoogle';
import './index.css'
import schoolLogo from  './trial-removebg-preview.png'


function App() {
    const[isLoggedin, setIsLoggedIn] = useState(false);
    const successfulSignIn = (response) => {
        console.log( "successfully signed in : ", response);
        setIsLoggedIn(true)
        window.location.replace('.src/welcome.js')
    }
    return (
        <div className="min-h-screen h-screen bg-[#183957] flex flex-col items-center justify-center relative">
            <div className="absolute -top-44 -left-44 circle-top-left"></div>
            <div className="absolute -bottom-44 -right-44 circle-bottom-right"></div>
            <GoogleOAuthProvider clientId="50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com">
                <div className="App">
                    <h1 className="text-white font-bold font-jomolhari mb-8 bg-[#183957] py-4 text-center text-4xl">
                        SHARJAH INDIAN SCHOOL JUWAIZA
                    </h1>
                    <img src={schoolLogo} alt="School Logo" className="w-32 translate-x-72 mb-8"/>
                    {isLoggedin ? (
                        <h1></h1>
                    ) : (
                        <SignInWithGoogle onSuccessfulSignIn={successfulSignIn}/>
                    )}
                </div>
            </GoogleOAuthProvider>
        </div>

    )
        ;
}


export default App;
