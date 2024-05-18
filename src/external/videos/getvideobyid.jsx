import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {UserContext} from "../../context/UserContext";
import { useEffect } from "react";
import './videouplod.css';

function getvideobyid() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [video, setVideo] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useContext(UserContext);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`/api/v1/videos/${user._id}`);
        //console.log(response.data.data);
        setVideo(response.data.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    fetchVideo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Video</h1>
      <video controls width="640" height="360">
            <source src={video.videoFile} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      {/* Add more video details here */}
    </div>
  );
}


export default getvideobyid