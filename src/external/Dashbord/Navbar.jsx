import { Link } from "react-router-dom"
import '../nav/nav.css'
import{ useState } from 'react'
import Translate from "../nav/Translate"
import { AiOutlineMail , AiFillMobile} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import { CgMoreO } from 'react-icons/cg'
// import axios from "axios"
const Navbar = () => {
    const [activeNav , setActiveNav] = useState('#');
    const navigate = useNavigate();
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        }
    const handleLogout = async () => {
        try {
            // const response = await axios.get('/api/v1/users/history');
            const response = await fetch('/api/v1/users/logout', {
                method: 'POST',
            });
            if (response.ok) {
                console.log("logout");
                navigate('/login')
            } else {
                console.error('Logout failed 1');
            }
        } catch (error) {
            console.error('Logout failed 2', error);
        }
    };

  return (
    <>
    <div className="topbar">
        <div className="topbar-email"><AiOutlineMail className="text-primary"/> <a className="text-light" href="mailto:shiksha.sankalp01@gmail.com">shiksha.sankalp01@gmail.com</a></div>
        <Translate/>
        <div className="topbar-mobile"><AiFillMobile className="text-primary"/><p className="text-light">+91 77680 45847</p></div>
    </div>
    <div className="topnav" id="myTopnav">
        <div className="one">
            <li><Link to="/dashbord"  onClick={() => setActiveNav('#dashbord')} id="homeli" className={activeNav === '#dashbord' ? '' : ''}><img className="navimg" src="home1.png" alt=""/>Shiksha<span className="text-blue">Sankalp</span></Link></li>
            <li className="all-li"><Link to="/getvideos" onClick={() => setActiveNav('#getvideos')}  className={activeNav === '#getvideos' ? 'active' : ''}>My Videos</Link></li>
            {/* <li className="all-li"><Link to="/updatevideo" onClick={() => setActiveNav('#updatevideo')}  className={activeNav === '#updatevideo' ? 'active' : ''}>Update Video</Link></li> */}
            <li className="all-li"><Link to="/uploadvideo" onClick={() => setActiveNav('#uploadvideo')}  className={activeNav === '#uploadvideo' ? 'active' : ''}>Upload Video</Link></li>
            <li className="all-li"><Link to="/acc" onClick={() => setActiveNav('#acc')}  className={activeNav === '#acc' ? 'active' : ''}>My Account</Link></li>
            <li className="all-li"><Link to="/tweets" onClick={() => setActiveNav('#tweets')}  className={activeNav === '#tweets' ? 'active' : ''}>Tweets</Link></li>
            <li className="all-li"><Link to="/getusertweets" onClick={() => setActiveNav('#getusertweets')}  className={activeNav === '#getusertweets' ? 'active' : ''}>My Tweets</Link></li>
            <li className="all-li"><Link to="/subscriptions" onClick={() => setActiveNav('#subscriptions')}  className={activeNav === '#subscriptions' ? 'active' : ''}>My Subscriptions</Link></li>
        </div>
        <div className="two">
            <li  onClick={handleLogout}  className={activeNav === '#login' ? 'active' : ''}><Link to="/login" className="loginbtn btn">Logout</Link></li>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}><CgMoreO/></a>
    </div>
    </>
  )
}

export default Navbar ;