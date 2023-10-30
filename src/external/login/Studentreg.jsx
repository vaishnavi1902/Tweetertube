import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Studentreg = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    fname: '',
    mname: '',
    lname: '',
    adhar: 0,
    age: 0,
    gender: '',
    ayear: 0,
    password: '',
  })

  const RegisterStudent = async (e) => {
    e.preventDefault()
    const { fname, mname, lname, adhar, age, gender, ayear, password } = data
    try {
      const { data } = await axios.post('http://localhost:9000/register', {
        fname, mname, lname, adhar, age, gender, ayear, password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login successfull welcome!')
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
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder="enter age" name="age"
                value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })}
                required />
            </div>
            <div>
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
            </div>
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

export default Studentreg