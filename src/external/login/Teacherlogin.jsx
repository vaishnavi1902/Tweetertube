import teacher from './login_register/login-teacher.jpg'
const Teacherlogin = () => {
  return (
<>
<section className="register-div login-div"  id="regiter-form">
      <div className="">
          <h3>Login for Teacher</h3>
          <form className="school-reg">
            <div className="img-login-div">
            <img src={teacher} alt="" className='login-img' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="enter email"  name="email" required/>
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

export default Teacherlogin