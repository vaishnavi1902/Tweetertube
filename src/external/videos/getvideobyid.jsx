import  { useState , useContext , useEffect } from 'react';
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import './videouplod.css';
import Navbar from '../Dashbord/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
function getvideobyid() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
    const [video, setVideo] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [videos, setVideos] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentVideo, setCurrentVideo] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useContext(UserContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // if(user._id) {
          const { data } = await axios.get('/api/v1/users/current-user');
          const response = await axios.get(`/api/v1/videos/${data.data._id}`);
          console.log(data.data._id);
          console.log(response.data.data);
          setVideo(response.data.data);
        // } 
       
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    fetchVideo();
  }, []);

  // }, []);
  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
    addToWatchHistory(currentVideo._id,user._id)
  };
  const addToWatchHistory = async (videoId,userId) => {
    try {
      const response = await axios.post('/api/v1/users/addhistory', { userId, videoId });
      console.log('Video added to watch history', response.data);
    } catch (error) {
      console.error('Error adding video to watch history');
    }
  };
  const handleDelete = async (videoId) => {
  try {
    const response = await axios.delete(`/api/v1/videos/${videoId}`);
    if (response.status === 200) {
      console.log('video deleted successfully');
      alert("video deleted successfully");
    }
  }catch (error) {
    console.error("error deleting video : ", error);
    alert("error deleting video : ", error);
  }
  };
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!video) {
    
    return <div> 
      <Navbar/> <h1>data not found</h1> <Footer/></div>;
  }

  return (
    <>
    <Navbar />
    <div className='Video'>
      <h1>My Videos</h1>
      <div className="videos-page">
      <ul>
        {video.map((video) => (
          <li key={video._id}>
            <a onClick={() => handleVideoSelect(video)}><img src={video.thumbnail} alt="" /></a>
            {/* <button onClick={()=> }></button> */}
           <div>
           <h2>{video.title}</h2>
            <p>{video.description}</p>
           </div>
          </li>
        ))}
      </ul>
      <div>
      {currentVideo && (
        <div>
          <video controls width="640" height="360">
            <source src={currentVideo.videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>{currentVideo.title}</h2>
          <p>{currentVideo.description}</p>
          <button className='links btn' onClick={() => handleDelete(currentVideo._id)}>Delete Video</button>
          <button><Link to={`/updatevideo/${currentVideo._id}`}  className={'links btn'}>Update Video</Link></button>
        </div>
      )}
      </div>
      </div>
      </div>
      {/* <video controls width="640" height="360">
            <source src={video.videoFile} type="video/mp4" />
            Your browser does not support the video tag.
      </video> */}
      {/* Add more video details here */}
      <Footer/>
    </>
  );
}
export default getvideobyid ;