import './login.css';
import { Link } from "react-router-dom"
import student from './login_register/girl-school.jpg'
import teacher from './login_register/teacher.jpeg'
import school from './login_register/childresn-school.jfif'
const Login = () => {
  return (
   <>
    <section className='login' >
        <div className="container" id='login'>
          <div className="item-login">
          <h5 >Are you a student ? Login here 👇🏻</h5>
          <img src={student} alt="" />
          <Link to="/studentlogin" className='tolink'>Student Login</Link>
          </div>
          <div className="item-login">
          <h5 >Are you a Teacher ? Login here 👇🏻</h5>
          <img src={teacher} alt="" />
          <Link to="/teacherlogin" className='tolink'>Teacher Login</Link>
          </div>
          <div className="item-login">
          <h5 >Are you logging as a school? Login here👇🏻</h5>
          <img src={school} alt="" />
          <Link to="/schoollogin" className='tolink'>School Login</Link>
          </div>
        </div>
        <h3 className='register-here'>Not a member of Shikshasankalp ? <Link to="/register" className="register-here-btn" >Regester here !</Link></h3>
    </section>
    </>
  )
}

export default Login