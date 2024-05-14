import React from 'react';

import {GoogleLogin} from '@react-oauth/google';

const handleGoogleSignIn = (response) => {
    const {profileObj} = response;
    console.log('Logged in with Google:', profileObj);
    // Send the user profile information to your backend or store it locally
};

const SignInWithGoogle = () => {
    const clientId = '50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com'; // Replace with your client ID

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={handleGoogleSignIn}
                buttonText="Sign in with Google"
                cookiePolicy={'single_host_origin'} // Recommended for security
            />
            <button className="pb-5 text-5xl font-bold hover:scale-105 duration-200">
                Click me
            </button>
        </div>
    );

};

export default SignInWithGoogle;
