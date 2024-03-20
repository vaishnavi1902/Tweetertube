import { Link } from "react-router-dom"
import '../nav/nav.css'
import{ useState  } from 'react'
import Translate from "../nav/Translate"
import { CgMoreO } from 'react-icons/cg'
import { AiOutlineMail , AiFillMobile} from 'react-icons/ai'

const Navbar = () => {
  const [activeNav , setActiveNav] = useState('#');
  
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
      // Make a request to the server-side logout route
      const response = await fetch('api/v1/users/logout', {
          method: 'POST',
      });


      if (response.ok) {
          // Clear any client-side storage, state, or context related to authentication
          // (Optional: call a parent component's logout handler)

          // Redirect to the login page or another appropriate page
          // history.push('/courses');
          // navigate('/login')
      } else {
          console.error('Logout failed');
      }
  } catch (error) {
      console.error('Logout failed', error);
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
            <li className="all-li"><Link to="/mycourses" onClick={() => setActiveNav('#mycourses')}  className={activeNav === '#mycourses' ? 'active' : ''}>My Courses</Link></li>
            {/* <li className="all-li"><Link to="/blog" onClick={() => setActiveNav('#blog')}  className={activeNav === '#blog' ? 'active' : ''}>Blog</Link></li> 
            <li className="all-li"><Link to="/instructor" onClick={() => setActiveNav('#instructor')}  className={activeNav === '#instructor' ? 'active' : ''}>Become an Instructor</Link></li> 
            <li className="all-li"><Link to="/contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}>Contact</Link></li> */}
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