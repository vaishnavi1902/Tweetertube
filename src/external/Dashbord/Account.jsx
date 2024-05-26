import Footer from "../footer/Footer"
import Navbar from "./Navbar"
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import WatchHistory from "../videos/watchhistory";
import { FaPen } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './updateaccount/dahbord.css';
import GetLikeVideo from "../likes/GetLikeVideo";
import './dashbord.css'
import Channelstates from "./Channelstates";
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
                <img className='cover-image' src={user.coverImage} alt="" />
                <button className="update-cover edit" title="update cover image"><Link to="/updatecover"><FaPen/></Link></button>
                <div className="grid">
                <div className='user-info'>
                    <img src={user.avatar} alt="" />  
                    <button className="update-avator edit" title="update avatar image"><Link to="/updateavatar"><FaPen/></Link></button>  
                    <div>
                        <h5>Username : <span>{user.username}</span></h5>
                        <h5>Full Name : <span>{user.fullName}</span></h5>
                        <h5>Email : <span>{user.email}</span></h5>
                        <h5>Account <span>Created on : {user.createdAt}</span></h5>
                    </div>
                </div>
                <div>
                    <Channelstates channelId={user._id}/>
                </div>
                </div>
                <button className="edit"><Link className="links" to="/updateaccount">Update Account Details</Link></button>
                <button className="edit"><Link className="links" to="/changepass">Change Password</Link></button>
                <button className="edit"><Link className="links" to="/mysubscribers">Subscribers</Link></button>
            </div>
            <div className="flex4">
            <WatchHistory/>
            <GetLikeVideo/>
            </div>           
            <Footer/>
        </>
     )}
</div>
    )
}

export default Account