import { useState, useEffect } from "react";
import axios from "axios";
import './dashbord.css'
// eslint-disable-next-line react/prop-types
const Channelstates = ({ channelId }) => {
  const [channelStats, setChannelStats] = useState(null);

  useEffect(() => {
    const fetchChannelStats = async () => {
      
       try {
         console.log(channelId);
         if(channelId){
          const response = await axios.get(`/api/v1/dashboard/stats/${channelId}` );
          console.log(response.data.message);
          setChannelStats(response.data.message);
         }
        
       } catch (error) {
        console.log(error);
       }
      
    };

    fetchChannelStats();
  }, [channelId]);

  if (!channelStats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="status">
      <h2>Channel Status</h2>
      <p>Total Videos: <span>{channelStats.totalVideos}</span></p>
      <p>Total Subscribers: <span>{channelStats.totalSubscribers}</span></p>
      <p>Total Likes: <span>{channelStats.totalLikes}</span></p>
    </div>
  );
};

export default Channelstates;