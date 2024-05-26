import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Footer from '../footer/Footer';
// import { Link } from 'react-router-dom';
import Navbar from '../Dashbord/Navbar';
import './sub.css';

const Subscriptions = () => {
    
  // eslint-disable-next-line no-unused-vars
  // const [subscribedChannels, setSubscribedChannels] = useState([]);
    // eslint-disable-next-line no-unused-vars
  const [channelSubscribers, setChannelSubscribers] = useState([]);
  // eslint-disable-next-line no-unused-vars
const [isSubscribed, setIsSubscribed] = useState(false);

const { user } = useContext(UserContext);

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
    // console.log(response);
    console.log(response.data.message);
    setChannelSubscribers(response.data.message);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  // getSubscribedChannels(user._id);
  getChannelSubscribers(user._id);
}, []);

return (
  <>
  <Navbar/>
   <div className="container">
      <h1>My Subscriptions </h1>
    <div className='parent'>
      <ul>
      {channelSubscribers.map((sub) => (
        <li key={sub._id} className='flex'>
          <div>
          <img className='bigimg' src={sub.channel.avatar} alt="" />
          </div>
          <div>
          <h3>Channel Name : <img className='avatar1 avtar2' src={sub.channel.avatar} alt="" />{sub.channel.username}</h3>
          <p>Name : {sub.channel.fullName}</p>
          <p>Email : {sub.channel.email}</p>
          <p>Account Created  : {sub.channel.createdAt}</p>
          </div>
        </li>
      ))}
      </ul>
    </div>
 </div>
  <Footer/>
  </>

);
};


export default Subscriptions