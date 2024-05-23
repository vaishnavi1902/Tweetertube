import { useState } from 'react';
import axios from 'axios';
// import Navbar from '../Dashbord/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const UpdateVideoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [message, setMessage] = useState('');
  const { videoId } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      
      formData.append('thumbnail', thumbnail);
      console.log(formData);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const response = await axios.patch(`/api/v1/videos/${videoId}`, formData , config);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };


  return (
   <>
   <button><Link to="/getvideos" className={'links btn'}>My Videos</Link></button>
  <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="thumbnail">Thumbnail:</label>
      <input
        type="file"
        id="thumbnail"
        accept="image/*"
        onChange={(e) => setThumbnail(e.target.files[0])}
      />

      <button type="submit">Update Video</button>

      {message && <p>{message}</p>}
    </form>
   <Footer/>
   </>
  );
};

export default UpdateVideoForm;