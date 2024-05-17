import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import schoolLogo from  './trial-removebg-preview.png'

const handleGoogleSignIn = (response) => {
    const { profileObj } = response;
    console.log('Logged in with Google:', profileObj);
    // Send the user profile information to your backend or store it locally
};

const SignInWithGoogle = () => {
    const clientId = '50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com'; // Replace with your client ID

    return (
        <div className="bg-[#A5BCC9] rounded-lg shadow-md p-8 w-80 max-w-md flex flex-col items-center translate-x-48">
            <div className="bg-[#A5BCC9] rounded-full p-11 mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-gray-600"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={handleGoogleSignIn}
                render={(renderProps) => (
                    <button
                        className="bg-white text-gray-800 font-bold py-8 px-12 rounded shadow-md hover:bg-gray-100 transition-colors duration-300 w-full text-2xl"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        Sign in with Google
                    </button>
                )}
                cookiePolicy={'single_host_origin'} // Recommended for security
            />
        </div>
    );
};

export default SignInWithGoogle;
