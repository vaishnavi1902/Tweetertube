import { Link } from "react-router-dom"
import './nav.css'
import{ useState  } from 'react'
import Translate from "./Translate"
import { AiOutlineMail , AiFillMobile} from 'react-icons/ai'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#');
  
 

  return (
    <>
    <div className="topbar">
        <div className="topbar-email"><AiOutlineMail className="text-primary"/> <a className="text-light" href="mailto:shiksha.sankalp01@gmail.com">shiksha.sankalp01@gmail.com</a></div>
        <Translate/>
        <div className="topbar-mobile"><AiFillMobile className="text-primary"/><p className="text-light">+91 77680 45847</p></div>
    </div>
    <div className="nav">
        <div className="one">
            <li><Link to="/"  onClick={() => setActiveNav('#')} id="homeli" className={activeNav === '#' ? '' : ''}><img className="navimg" src="home1.png" alt=""/>Shiksha<span className="text-blue">Sankalp</span></Link></li>
            <li className="all-li"><Link to="/courses" onClick={() => setActiveNav('#courses')}  className={activeNav === '#courses' ? 'active' : ''}>Courses</Link></li>
            <li className="all-li"><Link to="/blog" onClick={() => setActiveNav('#blog')}  className={activeNav === '#blog' ? 'active' : ''}>Blog</Link></li> 
            <li className="all-li"><Link to="/instructor" onClick={() => setActiveNav('#instructor')}  className={activeNav === '#instructor' ? 'active' : ''}>Become an Instructor</Link></li> 
            <li className="all-li"><Link to="/contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}>Contact</Link></li>
        </div>
        <div>
            <li  onClick={() => setActiveNav('#login')}  className={activeNav === '#login' ? 'active' : ''}><button className="loginbtn btn">Login / Register</button></li>
        </div>
        {/* <li><Link to="/main">Main</Link></li> */}
    </div>
    </>
  )
}

export default Nav