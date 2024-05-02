// import React from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footerbar from './Footerbar';
import Navbar from './Navbar';
import "./dashbord.css"
// import { useHistory } from 'react-router-dom';

function Dashbord() {
    const [user, setUser] = useState([]);
    // const navigate = useNavigate();


    useEffect(() => {

        (async () => {
            try {
                const response = await axios.get('api/v1/users/current-user')
                setUser(response.data.data)
            } catch (error) {
                console.log(error)

            }
        })()

    }, []);


    // const history = useHistory();


    // const handleLogout = async () => {
    //     try {
    //         // Make a request to the server-side logout route
    //         const response = await fetch('api/v1/users/logout', {
    //             method: 'POST',
    //         });


    //         if (response.ok) {
    //             navigate('/login')
    //         } else {
    //             console.error('Logout failed');
    //         }
    //     } catch (error) {
    //         console.error('Logout failed', error);
    //     }
    // };

    return (
        <div>
            {!!user && (
                <>
                    <Navbar/>
                    <div className="container">
                        <h1>Hi, {user.fullName}!</h1>
                        <h2>Profile Details : </h2>
                        <div className='user-info'>
                            <img src={user.coverImage} alt="" />
                            <div>
                                <h5>Username : <span>{user.username}</span></h5>
                                <h5>Full Name : <span>{user.fullName}</span></h5>
                                <h5>Email : <span>{user.email}</span></h5>
                                <h5>Account <span>Created on : {user.createdAt}</span></h5>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={handleLogout}>Logout</button> */}
                    <Footerbar/>
                </>
            )}
        </div>
    )
}
export default Dashbord