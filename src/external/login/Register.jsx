import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"
import './login.css'
const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    Username: '',
    email: '',
    fullName: '',
    password: '',
  })
  // console.log(avatar);

  const RegisterStudent = async (e) => {
    e.preventDefault()
    const { Username, email, fullName, password } = data;
  
    const fd = new FormData()
    fd.append('username', Username)
    fd.append('email', email)
    fd.append('fullName', fullName)
    fd.append('avatar', data.avatar)
    fd.append('coverImage', data.coverImage)
    fd.append('password', password)

    
    try {
      const { data } = await axios.post('/api/v1/users/register',fd)
      if (data.error) {
        toast.error(data.error)
        console.log(data.error)
      } else {
        setData({})
        toast.success('Login successfull welcome!')
        console.log("successful")
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className="register-div" id="regiter-form">
        <div className="">
          <h3>Register as Student</h3>
          <form className="student-reg" onSubmit={RegisterStudent}>
            <div>
              <label htmlFor="fname">UserName:</label>
              <input type="text" id="fname" placeholder="enter Username" name="Username"
                value={data.Username} onChange={(e) => setData({ ...data, Username: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="mname">Email :</label>
              <input type="text" id="mname" placeholder="enter email " name="email"
                value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="lname">Full Name</label>
              <input type="text" id="lname" placeholder="enter Full Name" name="fullName"
                value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="adhar">avatar</label>
              <input type="file" id="adhar"  name="avatar"
                onChange={(e) => setData({ ...data, avatar: e.target.files[0] })}
                required />
            </div>
            <div>
              <label htmlFor="age">coverImage </label>
              <input type="file" id="age"  name="coverImage"
                onChange={(e) => setData({ ...data, coverImage: e.target.files[0] })}
           />
            </div>
            {/* <div>
              <label htmlFor="gender">Select Gender</label>
              <select name="gender" id="gender" value={data.gender} onChange={(e) => setData({ ...data, gender: e.target.value })}>
                <option value="select">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="ayear">Academic Year (Optional)</label>
              <input type="number" id="ayear" placeholder="enter Academic year" name="ayear"
                value={data.ayear} onChange={(e) => setData({ ...data, ayear: e.target.value })} />
  </div> */}
            <div> 
              <label htmlFor="password">Enter Password </label>
              <input type="password" placeholder="Enter the password" id="password" name="password"
                value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                required />
            </div>
            <input type="submit" className="submit" value="submit" />
          </form>
        </div>
      </section></>
  )
}

export default Register