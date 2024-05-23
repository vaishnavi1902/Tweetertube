import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import Footer from '../footer/Footer';
import Navbar from '../Dashbord/Navbar'
import './sub.css';

const Subscriptions = () => {
    const [subscribedChannels, setSubscribedChannels] = useState([]);
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

    useEffect(() => {
        getSubscribedChannels(user._id);
      }, []);
  return (
   <>
   <Navbar/>
   <div className="container">
      <h1>My Subscriptions </h1>
    <ul>
        {subscribedChannels.map((sub) => (
          <li key={sub._id}>
            <p>{sub.subscriber.username}</p>
          </li>
        ))}
      </ul>
      </div>
   <Footer/>
   </>
  )
}

export default Subscriptions