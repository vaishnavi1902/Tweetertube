import { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import "./videouplod.css"
import Footer from '../footer/Footer';
import Navbar from '../Dashbord/Navbar';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import CommentList from '../comment/CommentList'
import AddComment from '../comment/AddComment';
import LikeVideo from '../likes/LikeVideo';
import VideoLikecount from './VideoLikeCount'
const Video = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [IsSubscribed,setIsSubscribed] =useState(false);
  // const [currentuser , setcurrentuser] = useState(null)
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
    console.log(video);
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
  const toggleSubscription = async (channelId) => {
    try {
      const response = await axios.post(`/api/v1/subscriptions/c/${channelId}`);
      console.log(response);
      setIsSubscribed(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <Navbar/>
    <div className="Video">
      <h1>All Videos</h1>
      <div className="videos-page">
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <a onClick={() => handleVideoSelect(video)}><img src={video.thumbnail} alt="" /></a>
            {/* <button onClick={()=> }></button> */}
           <div>
           <h2>{video.title}</h2>
           {/* <button className='profile-btn'><img src={user.avatar} /><Link to={`/userprofile/${user.username}`}  className={'profile-link'}>{user.username}</Link></button> */}
            <p>{video.description}</p>
            {/* {( <button onClick={() => toggleSubscription(video.owner[0]._id)}>Subscribe {IsSubscribed}</button>)} */}
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
          <div className='flex space-between'>
          <button  className='profile-btn'><img src={currentVideo.owner[0].avatar} /><Link to={`/userprofile/${currentVideo.owner[0].username}`}  className={'profile-link'}>{currentVideo.owner[0].username}</Link></button>
          {( <button onClick={() => toggleSubscription(currentVideo.owner[0]._id)}>Subscribe {IsSubscribed}</button>)}
          </div>
          <h2>{currentVideo.title}</h2>
          <p className='desc'>{currentVideo.description}</p>   
          <div className="likesandnumber">
          <LikeVideo videoId={currentVideo._id} /> 
          <VideoLikecount videoId={currentVideo._id}/>
          </div>
          <AddComment videoId={currentVideo._id} />
          <CommentList videoId={currentVideo._id} />
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