import '../footer/footer.css'
import { Link } from "react-router-dom"
import { FaGraduationCap , FaChalkboardTeacher} from 'react-icons/fa'
import { CiReceipt } from 'react-icons/ci'
import {  AiOutlineHome , AiOutlineMail , AiOutlineInfoCircle , AiOutlineUnorderedList ,  AiOutlineDisconnect , AiOutlineCheck , AiFillGithub , AiFillLinkedin } from 'react-icons/ai'
const Footerbar = () => {
  return (
    <section id="footer" className='footer'>
      <div>
        <div className='heading-footer'><h3>About</h3> <AiOutlineInfoCircle /></div>
        <div className="description">
            <div className='p-footer'><AiOutlineCheck/><p>Our portal can give you a lot more than you think . We are here to help you in getting education as well as to learn <span className='text-primary'>extracurricular</span> activities and skills</p></div>
            <div className='p-footer'><AiOutlineCheck/><p>Students can register by mobile number and <span className='text-primary'>Adhar card</span> and can access the courses and more information on portal.</p></div>
            <div className='p-footer'><AiOutlineCheck/><p>Students with <span className='text-primary'>weak financial background</span> can also access all the study materials by going to nearbby net cafes and Wi-Fi centers.</p></div>
            <div className='p-footer'><AiOutlineCheck/><p>as we are  tying up with such centers and they will allow students to register to the portal just by using <span className='text-primary'>Adhar card</span></p></div>
            <div className='p-footer'><AiOutlineCheck/><p>A extra module added to the portal  <span className='text-primary'>for School</span> . School can purchas the access of portal for yearly access and can use the software for all the students .</p></div>
        </div>
      </div>
      <div>
      <div className='heading-footer'><h4>Links</h4> <AiOutlineUnorderedList /></div>
      <div className="footer-links"> 
          <li><AiOutlineHome/><Link to="/">Home</Link></li>
          <li><FaGraduationCap /><Link to="/courses">Courses</Link></li>
          <li><CiReceipt/><Link to="/blog">Blog</Link></li>
          <li><FaChalkboardTeacher/><Link to="/instructor">Become an Instructor</Link></li>
          <li><AiOutlineMail/><Link to="/contact">Contact</Link></li>
      </div>
      </div>
      <div>
      <div className='heading-footer'><h4>Connect us</h4><AiOutlineDisconnect/></div>
      <div className='socials'>
        <a className='footer-socials'  href="mailto:shiksha.sankalp01@gmail.com" target='blank'><AiOutlineMail/></a>
        <a className='footer-socials'  href="https://github.com/vaishnavi1902" target='blank'><AiFillGithub/></a>
        <a className='footer-socials'  href="https://www.linkedin.com/in/vaishnavi-kumbhakarna-838a13221/" target='blank'><AiFillLinkedin/></a>
      </div>
      </div>
    </section>
  )
}

export default Footerbar