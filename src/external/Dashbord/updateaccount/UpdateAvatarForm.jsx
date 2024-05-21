import { useState } from 'react';
import axios from 'axios';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
const UpdateAvatarForm = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
 axios
      .patch("/api/v1/users/avatar", formData, config)
      .then((response) => {
        console.log(response);
        setAvatarUrl(response.data.data.avatar);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
       <button><Link to="/acc" className={'links btn'}>My Account</Link></button>
    <div className="update-avatar-form">
      <h1>Avatar</h1>
      <form>
        <label htmlFor="avatar">New avatar Image:</label>
        <input type="file" id="avatar" onChange={handleAvatarChange}  />{
          !avatarUrl && (<img src='hii'/>)
        }
        {avatarUrl &&
        (
          <img
            src={avatarUrl}
            alt="Avatar"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        )}
        <button type='submit'> change Avatar</button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default UpdateAvatarForm;