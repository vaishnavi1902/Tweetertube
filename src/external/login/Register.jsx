import './login.css';
import { Link } from "react-router-dom"
const Register = () => {
  return (
    <section className='register' >
    <div className="container" id='register'>
      <p>ShikshaSankalp is a new initiative in the E-learning industry . 
        Our main and important motive behind the development of this Platform
        is to make education available for everyone out there ! As we all know
        there are variety of types of barriers that could become the Fullstop for 
        education in Rular areas , also the students and people having financially
        critical situations cannot afford the tech-gadgets for studies and cannot
        get the desired amount of knowledge , but we came here with a solution that 
        will definitely address this issues . 
      </p>
      <h4>Register to Shikshasankalp and Explore More :)</h4>
      <h1 >Select Your Role from below!</h1>
      <Link to="/studentreg" className='tolink'>Student</Link>
      <Link to="/teacherreg" className='tolink'>Teacher</Link>
      <Link to="/schoolreg" className='tolink'>School</Link>
    </div>
    <h3 className='register-here'>Already a member of Shikshasankalp ? <Link to="/login" className="register-here-btn" >Login here!</Link></h3>
</section>
  )
}

export default Register