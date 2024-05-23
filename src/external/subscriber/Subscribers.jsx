import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import './sub.css';
const Subscribers = () => {
  // eslint-disable-next-line no-unused-vars
  const [subscribedChannels, setSubscribedChannels] = useState([]);
    // eslint-disable-next-line no-unused-vars
  const [channelSubscribers, setChannelSubscribers] = useState([]);
    // eslint-disable-next-line no-unused-vars
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { user } = useContext(UserContext);

  const getSubscribedChannels = async (channalId) => {
    try {
      const response = await axios.get(`/api/v1/subscriptions/c/${channalId}`);
      console.log(response.data.message);
      setSubscribedChannels(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const toggleSubscription = async (channelId) => {
    try {
      const response = await axios.post(`/api/v1/subscriptions/c/${channelId}`);
      console.log(response);
      setIsSubscribed(response.data.isSubscribed);
    } catch (error) {
      console.error(error);
    }
  };
  const getChannelSubscribers = async (channelId) => {
    try {
      const response = await axios.get(`/api/v1/subscriptions/u/${channelId}`);
      console.log(response);
      setChannelSubscribers(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubscribedChannels(user._id);
    getChannelSubscribers(user._id);
  }, []);

  return (
    <>
   <button className='mytweets-btn btn'><Link to={`/acc`}  className={'mytweets-link'}>My Account</Link></button>
    <div className="container">
      <h1>My Subscribers </h1>
    <ul>
        {channelSubscribers.map((sub) => (
          <li key={sub._id}>
            <p>{sub.channel.username}</p>
          </li>
        ))}
      </ul>
    </div>

    <Footer/>
    </>

  );
};

export default Subscribers;