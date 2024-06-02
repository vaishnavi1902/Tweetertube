import { Link } from "react-router-dom"
import './nav.css'
import{ useState  } from 'react'
import Translate from "./Translate"
import { CgMoreO } from 'react-icons/cg'
import { AiOutlineMail , AiFillMobile} from 'react-icons/ai'

const Nav = () => {
  const [activeNav , setActiveNav] = useState('#');
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }

  return (
    <>
    <div className="topbar">
        <div className="topbar-email"><AiOutlineMail className="text-primary"/> <a className="text-light" href="mailto:shiksha.sankalp01@gmail.com">shiksha.sankalp01@gmail.com</a></div>
        <Translate/>
        <div className="topbar-mobile"><AiFillMobile className="text-primary"/><p className="text-light">+91 77680 45847</p></div>
    </div>
    <div className="topnav" id="myTopnav">
        <div className="one">
            <li><Link to="/"  onClick={() => setActiveNav('#')} id="homeli" className={activeNav === '#' ? '' : ''}><img className="navimg" src="home1.png" alt=""/>Shiksha<span className="text-blue">Sankalp</span></Link></li>
            {/* <li className="all-li"><Link to="/courses" onClick={() => setActiveNav('#courses')}  className={activeNav === '#courses' ? 'active' : ''}>Courses</Link></li>
            <li className="all-li"><Link to="/blog" onClick={() => setActiveNav('#blog')}  className={activeNav === '#blog' ? 'active' : ''}>Blog</Link></li> 
            <li className="all-li"><Link to="/instructor" onClick={() => setActiveNav('#instructor')}  className={activeNav === '#instructor' ? 'active' : ''}>Become an Instructor</Link></li>  */}
            <li className="all-li"><Link to="/contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}>Contact</Link></li>
            {/* <li className="all-li"><Link to="/videos" onClick={() => setActiveNav('#videos')}  className={activeNav === '#videos' ? 'active' : ''}>Videos</Link></li> */}

        </div>
        <div className="two">
            <li onClick={() => setActiveNav('#login')}  className={activeNav === '#login' ? 'active' : ''}><Link to="/login" className="loginbtn btn">Login / Register</Link></li>
        </div>
       <a href="javascript:void(0);" className="icon" onClick={myFunction}><CgMoreO/></a>
    </div>
    </>
  )
}

export default Nav ;