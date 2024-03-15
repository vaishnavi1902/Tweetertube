import student from './login_register/login-student.jpg'
import { useState } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import dashbord from '../Dashbord/Dashbord';
const Studentlogin = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    adhar: '',
    password: '',
  })
  const LoginsUser = async (e) => {
    e.preventDefault()
    const { adhar, password } = data
    try {
      const { data } = await axios.post('/login', {
        adhar,
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
          <h3>Login for Student</h3>
          <form className="school-reg" onSubmit={LoginsUser}>
            <div className="img-login-div">
              <img src={student} alt="" className='login-img' />
            </div>
            <div>
              <label htmlFor="adhar">Adhar Number:</label>
              <input type="number" id="adhar" placeholder="enter ADHAR card number" name="adhar"
                value={data.adhar} onChange={(e) => setData({ ...data, adhar: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="password">Enter Password </label>
              <input type="password" placeholder="Enter the password" id="password" name="password"
                value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                required />
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  )
}

export default Studentlogin