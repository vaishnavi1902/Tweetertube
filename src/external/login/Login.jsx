import student from './login_register/login-student.jpg'
import { useState , useContext } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Nav from '../nav/Nav'


import './login.css'
import Footer from '../footer/Footer';
const Login = () => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const LoginsUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      // console.log("hey");
      const { data } = await axios.post('/api/v1/users/login', {
        username,
        password
      });
      console.log(data);
      if (data.error) {
        toast.error(data.error)
      } else {
        // localStorage.setItem('user', JSON.stringify(data));
        setUser({_id:data.data.user._id, fullName: data.data.user.fullName,username: data.data.user.username, email: data.data.user.email, coverImage: data.data.user.coverImage, avatar: data.data.user.avatar, watchHistory: data.data.user.watchHistory , createdAt: data.data.user.createdAt })
        navigate('/dashbord')
      }
    } catch (error) {
      
      console.log(error);
    }
  }
  return (

    <>
    <Nav/>
      <section className="register-div login-div" id="regiter-form">
        <div className="">
          <h3>Login</h3>
          <form className="school-reg" onSubmit={LoginsUser}>
            <div className="img-login-div">
              <img src={student} alt="" className='login-img' />
            </div>
            <div>
              <label htmlFor="username">username:</label>
              <input type="text" id="username" placeholder="enter username" name="username"
                value={data.username
                } onChange={(e) => setData({ ...data, username: e.target.value })}
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
          <h3 className='register-here'>Not a member of Shikshasankalp ? <Link to="/register" className="register-here-btn" >Regester here !</Link></h3>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Login
