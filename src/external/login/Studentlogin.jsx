import student from './login_register/login-student.jpg'
const Studentlogin = () => {
  return (
    <>
    <section className="register-div login-div"  id="regiter-form">
      <div className="">
          <h3>Login for Student</h3>
          <form className="school-reg">
          <div className="img-login-div">
            <img src={student} alt="" className='login-img' />
            </div>
            <div>
              <label htmlFor="adhar">Adhar Number:</label>
              <input type="number" id="adhar" placeholder="enter ADHAR card number"  name="adhar" required/>
            </div>
            <div>
              <label htmlFor="password">Enter Password </label>
              <input type="password" placeholder="Enter the password" id="password" name="password"/>
            </div>
            <input type="submit" className="submit" value="Submit" />
          </form>
      </div>
    </section>
    </>
  )
}

export default Studentlogin