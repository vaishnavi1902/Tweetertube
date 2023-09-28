import { Link } from "react-router-dom"
import './nav.css'
const Nav = () => {
  return (
    <>
    <div className="topbar">
        <div className="topbar-email"><a className="text-light" href="mailto:shiksha.sankalp01@gmail.com">shiksha.sankalp01@gmail.com</a></div>
        <div className="topbar-mobile"><p className="text-light">+91 77680 45847</p></div>
    </div>
    <div className="nav">
        <div className="one">
            <li><Link className="homeli" to="/"><img className="navimg" src="home.png" alt=""/>Shiksha<span>संकल्प</span></Link></li>
            <li><Link className="all-li" to="/courses">Courses</Link></li>
            <li><Link className="all-li" to="/blog">Blog</Link></li> 
            <li><Link className="all-li" to="/instructor">Become an Instructor</Link></li> 
            <li><Link className="all-li" to="/contact">Contact</Link></li>
        </div>
        <div>
            <li><button className="loginbtn btn">Login / Register</button></li>
        </div>
        {/* <li><Link to="/main">Main</Link></li> */}
    </div>
    </>
  )
}

export default Nav