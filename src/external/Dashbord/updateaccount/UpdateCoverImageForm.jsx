import  { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';
const UpdateCoverImageForm = () => {
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("coverImage", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .patch("/api/v1/users/cover-image", formData, config)
      .then((response) => {
        console.log("hiii");
        setCoverImageUrl(response.data.data.coverImage);
      })
      .catch((error) => {
        console.log(error);
        console.error(error);
      });
  };

  return (
    <>
    <button><Link to="/acc" className={'links btn'}>My Account</Link></button>
    <div className="user-profile">
      <h1>Cover Img</h1>
      <form>
        <label htmlFor="coverImage">Cover Image:</label>
        <input type="file" id="coverImage" onChange={handleCoverImageChange} />
        {!coverImageUrl && <img src='hii'/>}
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt="Cover Image"
            style={{ width: "100px", height: "200px", objectFit: "cover" }}
          />
        )}
        <button type='submit'>change cover img</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default UpdateCoverImageForm;