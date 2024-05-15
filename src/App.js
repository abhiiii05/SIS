import React, {useState} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInWithGoogle from './SignInWithGoogle';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import './index.html'
//import welcome from "./welcome";

function IndexPage(){
    return(
        <div>
            <h1>HI</h1>
        </div>
    );
}
function App() {
    const[isLoggedin, setIsLoggedIn] = useState(false);
    //const nav = useNavigate();

    // const successfulSignIn = (response) => {
    //     console.log("Successful sign in : ",  response);
    //     setIsLoggedIn(true);
    //     nav('/welcome');
    // };
    return (
        <BrowserRouter>

            <GoogleOAuthProvider clientId="50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com">
                <div className="App">
                    <Routes>
                        <Route path="/" element={<SignInWithGoogleWrapper setLoggedIn={setIsLoggedIn} />} />
                        <Route path="/welcome" element={<IndexPage />}/>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <welcome/>
                    <h1>Welcome to My App</h1>
                    {isLoggedin ? (<h1><p>You are logged in!</p></h1>) :
                        (
                        <SignInWithGoogle onSuccessfulSignIn={() => setIsLoggedIn(true)} />
                    )}
                </div>
            </GoogleOAuthProvider>

        </BrowserRouter>
    );
}

function SignInWithGoogleWrapper({setLoggedIn}) {
    const navigate = useNavigate();
    const successSignIn = (response) => {
        console.log("Sign in successful : ", response);
        setLoggedIn(true);
        navigate('/welcome')
    };
    return <SignInWithGoogle onSuccessfulSignIn={successSignIn}/>
}
export default App;


