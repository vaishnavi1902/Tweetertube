import './footer.css'
import { Link } from "react-router-dom"

import { AiOutlineInfoCircle , AiOutlineUnorderedList ,  AiOutlineDisconnect , AiOutlineCheck , AiOutlineMail , AiFillGithub , AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <section id="footer" className='footer'>
      <div>
        <div className='heading-footer'><h3>About</h3> <AiOutlineInfoCircle /></div>
        <div className="description">
            <div className='p-footer'><AiOutlineCheck/><p>Our portal can give you a lot more than you think . We are here to help you in education as well as to learn <span className='text-primary'>extracurricular</span> activities and skills</p></div>
            <div className='p-footer'><AiOutlineCheck/><p>Students can register by mobile number and <span className='text-primary'>Adhar card</span> and can access the courses and more information on portal.</p></div>
            <div className='p-footer'><AiOutlineCheck/><p>Students with <span className='text-primary'>weak financial background</span> can also access all the materials by going to nearbby net cafes and Wi-Fi centers.</p></div>
            <div className='p-footer'><AiOutlineCheck/><p>as we are  tying up with such centers and they will allow students to register to the portal just by using <span className='text-primary'>Adhar card</span></p></div>
            <div className='p-footer'><AiOutlineCheck/><p>A extra module added to the portal for <span className='text-primary'>Schools</span> . School can purchas the access of portal for yearly access and can use the software for all the students .</p></div>
        </div>
      </div>
      <div>
      <div className='heading-footer'><h4>Links</h4> <AiOutlineUnorderedList /></div>
      <div className="footer-links"> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/instructor">Become an Instructor</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </div>
      </div>
      <div>
      <div className='heading-footer'><h4>Connect us</h4><AiOutlineDisconnect/></div>
      <div className='socials'>
        <AiOutlineMail/>
        <AiFillGithub/>
        <AiFillLinkedin/>
      </div>
      </div>
    </section>
  )
}

export default Footer