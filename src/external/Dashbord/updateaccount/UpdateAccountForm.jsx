import{ useState } from "react";
import axios from "axios";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
const UpdateAccountForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch("/api/v1/users/update-account", {
        fullName,
        email,
      });
      setMessage(data.message);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred while updating the account details.");
      }
    }
  };

  return (
   <>
    <button><Link to="/acc" className={'links btn'}>My Account</Link></button>
    <form onSubmit={handleSubmit}className="update-account-form">
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update Account Details</button>
      {message && <p>{message}</p>}
    </form>
   <Footer/>
   </>
  );
};

export default UpdateAccountForm;