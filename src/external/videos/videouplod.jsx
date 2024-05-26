// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {UserContext} from "../../context/UserContext";
import './videouplod.css';
import Navbar from "../Dashbord/Navbar";
import Footer from "../footer/Footer";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const { user } = useContext(UserContext);
  const [videoFile, setVideoFile] = useState();
  const [thumbnail, setThumbnail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("userId", user._id);
    formData.append("videoFile", videoFile);
    formData.append("thumbnail", thumbnail);

    try {
      console.log(user._id);
      alert("Video Uploaded Successfully :)");
      const response = await axios.post(
        "/api/v1/videos/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
   <>
   <Navbar/>
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <label htmlFor="video">Upload Video</label>
      <input type="hidden" value={user._id} name="userId" />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files[0])}
      />
      <label htmlFor="video">Upload Thumbnail Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files[0])}
      />
      <button type="submit">Submit</button>
    </form>
    <Footer />
   </>
  );
}

export default App;