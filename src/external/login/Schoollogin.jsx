import school from './login_register/school-login.jfif'
const Schoollogin = () => {
  return (
    <>
    <section className="register-div login-div"  id="regiter-form">
      <div className="">
          <h3>Login for School</h3>
          <form className="school-reg">
          <div className="img-login-div">
            <img src={school} alt="" className='login-img' />
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

export default Schoollogin