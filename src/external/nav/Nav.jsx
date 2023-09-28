import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
    <li><Link to="/welcomee">Welcome</Link></li>
    <li><Link to="/courses">Courses</Link></li>
    <li><Link to="/blog">Blog</Link></li> 
    <li><Link to="/main">Main</Link></li>
    </>
  )
}

export default Nav