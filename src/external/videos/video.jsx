import { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import "./videouplod.css"
import Footer from '../footer/Footer';
import Navbar from '../Dashbord/Navbar';
import { UserContext } from '../../context/UserContext';
const Video = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/v1/videos/');
        setVideos(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
  // const handleDelete = async (videoId) => {
  // try {
  //   const response = await axios.delete(`/api/v1/videos/${videoId}`);
  //   if (response.status === 200) {
  //     console.log('video deleted successfully');
  //     alert("video deleted successfully");
  //   }
  // }catch (error) {
  //   console.error("error deleting video : ", error);
  //   alert("error deleting video : ", error);
  // }
  // };
  return (
    <>
    <Navbar/>
    <div className="Video">
      <h1>Videos</h1>
      <div className="videos-page">
      <ul>
        {videos.map((video) => (
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
          {/* <button className='btn' onClick={() => handleDelete(currentVideo._id)}>Delete Video</button> */}
          
        </div>
      )}
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Video;