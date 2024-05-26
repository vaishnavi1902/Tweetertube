import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Footer from '../footer/Footer';
// import Navbar from '../Dashbord/Navbar'
import { Link } from 'react-router-dom';

import './sub.css';
const Subscribers = () => {
  const [subscribedChannels, setSubscribedChannels] = useState([]);
    const { user } = useContext(UserContext);

    const getSubscribedChannels = async (channalId) => {
      try {
        const response = await axios.get(`/api/v1/subscriptions/c/${channalId}`);
        console.log(response);
        setSubscribedChannels(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        getSubscribedChannels(user._id);
      }, []);
  return (
   <>
    <button className='mytweets-btn btn'><Link to={`/acc`}  className={'mytweets-link'}>My Account</Link></button>
  <div className="container">
    <h1>My Subscribers </h1>
      <div className='parent'>
        <ul>
        {subscribedChannels.map((sub) => (
          <li key={sub._id} className='flex'>
            <div>
            <img className='bigimg' src={sub.subscriber.avatar} alt="" />
            </div>
            <div>
            <h3>Channel Name : <img className='avatar1 avtar2' src={sub.subscriber.avatar} alt="" />{sub.subscriber.username}</h3>
            <p>Name : {sub.subscriber.fullName}</p>
            <p>Email : {sub.subscriber.email}</p>
            <p>Account Created  : {sub.subscriber.createdAt}</p>
            </div>
          </li>
        ))}
        </ul>
      </div>
   </div>
   <Footer/>
   </>
  )
} 
export default Subscribers;