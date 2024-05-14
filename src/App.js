import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInWithGoogle from './SignInWithGoogle';

function App() {
    return (
        <GoogleOAuthProvider clientId="50247589356-79m9e84j9naggbu4dhsmnu1kv5an8khj.apps.googleusercontent.com">
            <div className="App">
                <h1>Welcome to My App</h1>
                <SignInWithGoogle />
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;


