import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const Teacherreg = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    fname: '',
    mname: '',
    lname: '',
    adhar: 0,
    mobile: 0,
    email: '',
    age: 0,
    gender: '',
    // certificate: '',
    proefficiency: 0,
    password: '',
  })

  const RegisterTeacher = async (e) => {
    e.preventDefault()
    const { fname, mname, lname, adhar, mobile, email, age, gender, proefficiency, password } = data
    try {
      const { data } = await axios.post('/registerteacher', {
        fname, mname, lname, adhar, mobile, email, age, gender, proefficiency, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successfull welcome!')
        // console.log(data)
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
          <h3>Register as Teacher</h3>
          <form className="teacher-reg" onSubmit={RegisterTeacher}>
            <div>
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" placeholder="enter first name" name="fname"
                value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="mname">Middle name:</label>
              <input type="text" id="mname" placeholder="enter middle name" name="mname"
                value={data.mname} onChange={(e) => setData({ ...data, mname: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" placeholder="enter last name" name="lname"
                value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="adhar">Adhar Number:</label>
              <input type="number" id="adhar" placeholder="enter ADHAR card number" name="adhar"
                value={data.adhar} onChange={(e) => setData({ ...data, adhar: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input type="number" id="mobile" placeholder="enter mobile" name="mobile"
                value={data.mobile} onChange={(e) => setData({ ...data, mobile: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="enter email" name="email"
                value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder="enter age" name="age"
                value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="gender">Select Gender</label>
              <select name="gender" id="gender" value={data.gender} onChange={(e) => setData({ ...data, gender: e.target.value })} required>
                <option value="select">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* <div>
              <label htmlFor="certificate">Upload Degree Certificate</label>
              <input type="file" id="certificate" name="certificate"
                value={data.certificate} onChange={(e) => setData({ ...data, certificate: e.target.value })}
                required />
            </div> */}
            <div>
              <label htmlFor="proefficiency">Teaching Proefficiency in</label>
              <input type="text" id="proefficiency" placeholder="enter your teaching interests" name="proefficiency"
                value={data.proefficiency} onChange={(e) => setData({ ...data, proefficiency: e.target.value })}
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
      </section></>
  )
}

export default Teacherreg