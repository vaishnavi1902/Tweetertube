import school from './login_register/school-login.jfif'
import student from './login_register/login-student.jpg'
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Schoollogin = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const loginSchool = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data } = await axios.post('/loginSchool', {
        email,
        password
      });
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        navigate('/dashbord')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className="register-div login-div" id="regiter-form">
        <div className="">
          <h3>Login for School</h3>
          <form className="school-reg" onSubmit={loginSchool}>
            <div className="img-login-div">
              <img src={school} alt="" className='login-img' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="enter email" name="email"
                value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="password">Enter Password </label>
              <input type="password" placeholder="Enter the password" id="password" name="password"
                value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  )
}

export default Schoollogin