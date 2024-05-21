import React, { useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import WatchHistory from '../video/WatchHistory';
import Getvideobyid from '../video/getvideobyid';
import ChangePasswordForm from './ChangePasswordForm';
import UpdateAccountForm from './UpdateAccountForm';
import UpdateCoverImageForm from './UpdateCoverImageForm';
import UpdateAvatarForm from './UpdateAvatarForm';


function dashbord() {
    // const [user, setUser] = useState([]);
    const navigate = useNavigate();
  
    const { user } = useContext(UserContext);
    const handleLogout = async () => {
        try {
            // Make a request to the server-side logout route
            const response = await fetch('v1/users/logout', {
                method: 'POST',
            });


            if (response.ok) {
                // Clear any client-side storage, state, or context related to authentication
                // (Optional: call a parent component's logout handler)

                // Redirect to the login page or another appropriate page
                // history.push('/courses');
                console.log("logout");
                navigate('/login')
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    };


    return (
        <div>
            {!!user && (
                <>
                    <h1>Hi, {user.email}!

                    </h1>
                    
                    <img src={user.coverImage} style={{ width: '20%', height: 'auto' }} alt="" />
                    <button onClick={handleLogout}>Logout</button>
                    <br/>
                     {/* <WatchHistory/> */}
                     <Getvideobyid/>
                     {/* <ChangePasswordForm/> */}
                     {/* <UpdateAccountForm/> */}
                     {/* <UpdateCoverImageForm/> */}
                     {/* <UpdateAvatarForm/> */}
                    

                </>
            )}
        </div>
    )
}
export default dashbord