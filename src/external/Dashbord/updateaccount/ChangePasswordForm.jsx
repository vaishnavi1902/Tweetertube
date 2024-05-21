import { useState } from "react";
import axios from "axios";
import './dahbord.css';
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/users/change-password", {
        oldPassword,
        newPassword,
      });
      setMessage(data.message);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred while changing the password.");
      }
    }
  };

  return (
    <>
    <button><Link to="/acc" className={'links btn'}>My Account</Link></button>
    <form onSubmit={handleSubmit} className="change-password-form">
      <label htmlFor="oldPassword">Old Password:</label>
      <input
        type="password"
        id="oldPassword"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit">Change Password</button>
      {message && <p>{message}</p>}
    </form>
    <Footer/>
    </>
  );
};

export default ChangePasswordForm;