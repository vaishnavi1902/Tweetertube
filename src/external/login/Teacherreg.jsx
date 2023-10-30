
const Teacherreg = () => {
  return (
    <>
    <section className="register-div"  id="regiter-form">
      <div className="">
          <h3>Register as Teacher</h3>
          <form className="teacher-reg">
            <div>
              <label htmlFor="fname">First name:</label>
              <input type="text" id="fname" placeholder="enter first name" name="fname" required/>
            </div>
            <div>
              <label htmlFor="mname">Middle name:</label>
              <input type="text" id="mname" placeholder="enter middle name"  name="mname" required/>
            </div>
            <div>
              <label htmlFor="lname">Last name:</label>
              <input type="text" id="lname" placeholder="enter last name"  name="lname" required/>
            </div>
            <div>
              <label htmlFor="adhar">Adhar Number:</label>
              <input type="number" id="adhar" placeholder="enter ADHAR card number"  name="adhar" required/>
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input type="number" id="mobile" placeholder="enter mobile"  name="mobile" required/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="enter email"  name="email" required/>
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder="enter age"  name="age" required/>
            </div>
            <div>
              <label htmlFor="gender">Select Gender</label>
              <select name="gender" id="gender" required>
                <option value="select">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="certificate">Upload Degree Certificate</label>
              <input type="file" id="certificate" name="certificate"  required/>
            </div>
            <div>
              <label htmlFor="proefficiency">Teaching Proefficiency in</label>
              <input type="text" id="proefficiency" placeholder="enter your teaching interests"  name="proefficiency" required/>
            </div>
            <div>
              <label htmlFor="password">Enter Password </label>
              <input type="password" placeholder="Enter the password" id="password" name="password"/>
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
      </div>
    </section></>
  )
}

export default Teacherreg