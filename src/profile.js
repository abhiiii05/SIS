// ProfilePage.js
import React from 'react';

const ProfilePage = ({ userInfo }) => {
    return (
        <div>
            <h1>Welcome, {userInfo.name}</h1>
            <img src={userInfo.imageUrl} alt="Profile" />
            <p>Email: {userInfo.email}</p>
            {/* Add other user information fields as needed */}
        </div>
    );
};

export default ProfilePage;