import React, {useState} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInWithGoogle from './SignInWithGoogle';
import './index.css'


function App() {
    const[isLoggedin, setIsLoggedIn] = useState(false);
    const successfulSignIn = (response) => {
        console.log( "successfully signed in : ", response);
        setIsLoggedIn(true)
        window.location.replace('.src/welcome.js')
     }
    return (
        <div className="min-h-screen bg-[#183957]  flex flex-col justify-center items-center">
            <GoogleOAuthProvider clientId="50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com">
                <div className="App ">
                    <h1 className="text-white font-bold font-jomolhari mb-8 fixed top-14 left-0 right-0 bg-[#183957] py-4 text-center text-4xl">SHARJAH
                        INDIAN SCHOOL JUWAIZA</h1>
                    {isLoggedin ? (<h1></h1>) :
                         (<SignInWithGoogle onSuccessfulSignIn={successfulSignIn}/>)}
                </div>
</GoogleOAuthProvider>
</div>

)
    ;
}


export default App;


