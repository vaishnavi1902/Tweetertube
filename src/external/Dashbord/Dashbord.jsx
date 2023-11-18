import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function dashbord() {
    const { user } = useContext(UserContext)
    // const history = useHistory();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            // Make a request to the server-side logout route
            const response = await fetch('http://localhost:9000/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Clear any client-side storage, state, or context related to authentication
                // (Optional: call a parent component's logout handler)

                // Redirect to the login page or another appropriate page
                // history.push('/courses');
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
            hiii all
            {!!user && (<h1>hii{user.fname}!</h1>)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default dashbord