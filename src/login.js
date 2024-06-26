import React, {useState} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInWithGoogle from './SignInWithGoogle';
import './index.css'
import schoolLogo from  './trial-removebg-preview.png'
import { GoogleLogin } from '@react-oauth/google'


function App() {
    const[isLoggedin, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const successfulSignIn = (response) => {
        console.log("Google OAuth Response:", response);

        // Extract the required user information from the response
        //const { name, email, picture } = response;
        const { name, email } = response;

        const userInfoData = {
            name: name || '',
            email: email || '',
            //imageUrl: picture || '',
            // Add any other relevant user information fields
        };

        console.log("User Information:", userInfoData);
        setIsLoggedIn(true);
        setUserInfo(userInfoData);
    };

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
