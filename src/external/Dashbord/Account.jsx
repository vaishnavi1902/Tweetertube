import Footer from "../footer/Footer"
import Navbar from "./Navbar"
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import WatchHistory from "../videos/watchhistory";
const Account = () => {

    const { user } = useContext(UserContext)
  return (
    <div>
    {!!user && (
        <>
            <Navbar/>
            <div className="container">
                <h1>Hi, {user.fullName}!</h1>
                <h2>Profile Details : </h2>
                <img className='avtar-image' src={user.avatar} alt="" />
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
            <WatchHistory/>
            <Footer/>
        </>
     )}
</div>
    )
}

export default Account