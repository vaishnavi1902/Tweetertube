
const Schoolreg = () => {
  return (
    <>
    <section className="register-div"  id="regiter-form">
      <div className="">
          <h3>Register for School</h3>
          <form className="school-reg">
            <div>
              <label htmlFor="schoolname">School name</label>
              <input type="text" id="schoolname" placeholder="enter School name" name="schoolname" required/>
            </div>
            <div>
              <label htmlFor="branch">School Branch</label>
              <input type="text" id="branch" placeholder="enter Branch of School"  name="branch" required/>
            </div>
            <div>
              <label htmlFor="address">Address </label>
              <input type="text" id="address" placeholder="enter full address of school"  name="address" required/>
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <input type="number" id="pincode" placeholder="enter pincode"  name="pincode" required/>
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
             <label htmlFor="City">State</label>
             <select name="state" id="state">
                <option value="Andhra Pradesh">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div>
              <label htmlFor="licence">Upload School Licence</label>
              <input type="file" id="licence" name="licence"  required/>
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

export default Schoolreg