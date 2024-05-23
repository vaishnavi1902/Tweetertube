import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './videouplod.css'
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
const UserChannelProfile = () => {
  const [channel, setChannel] = useState(null);
  const { username } = useParams()

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const response = await axios.get(`/api/v1/users/c/${username}`);
        console.log(response);
        setChannel(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChannel();
  }, []);

  return (
   <>
    <button><Link to="/videos" className={'links btn'}>All Videos</Link></button>
    <div>
      {channel && (
        <div>
          <img className='coverimage' src={channel.coverImage} alt={channel.fullName} />
          <div className='flex'>
          <img className='avatar' src={channel.avatar} alt={channel.fullName} />
          <div className='info'>
            <h1>Full Name : {channel.fullName}</h1>
            <p> Username : {channel.username}</p>
            <p>Subscribers: {channel.subscribersCount}</p>
            <p>Channels Subscribed To: {channel.channelsSubscribedToCount}</p>
            <p>Is Subscribed: {channel.isSubscribed ? "Yes" : "No"}</p>
            <p>Email: {channel.email}</p>
          </div>
          </div>
        </div>
      )}
    </div>
   <Footer/>
   </>
  );
};

export default UserChannelProfile;