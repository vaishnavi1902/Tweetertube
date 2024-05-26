import{ useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext.jsx";
import { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import {useNavigate } from "react-router-dom";

import Footer from "../../footer/Footer.jsx";
import Navbar from "../Navbar.jsx";
import { FaPen , FaTrash} from 'react-icons/fa';

// import { Link } from "react-router-dom";
// import { deleteTweet } from "../tweet.js";
const GetUserTweets = () => {
    const { user } = useContext(UserContext);
    const [tweets, setTweets] = useState([]);
    const navigate = useNavigate();
  const handleDeleteTweet = async (tweetId) => {
  try {
    const response = await fetch(`/api/v1/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete tweet');
    }

    // Optionally, you can fetch the updated list of tweets after deletion
    // const updatedTweets = await fetchTweets();
    // setTweets(updatedTweets);
    navigate('/tweets')
  } catch (error) {
    // console.error(error);
    // Handle the error, e.g. show an error message to the user
  }
};

    useEffect(() => {
    
      const fetchTweets = async () => {
        try {
          const userId = user._id;
          console.log(user._id);
          const response = await axios.get(`/api/v1/tweets/user/${userId}`);
          console.log(response);
          setTweets(response.data.message);
          // setLoading(false);
        } catch (err) {
          // setError(err.message);
          console.log(err);
          // setLoading(false);
        }
      };
      fetchTweets();
    }, []);
  
  
  
    return (
      <>
      <Navbar/>
      <button className='newtweet-btn btn'><Link to={`/createtweet`}  className={'newtweet-link'}>Create New Tweet</Link></button>
      <div className="container">
        {tweets.map((tweet) => (
          <div className="tweets" key={tweet._id}>
            <div className="space">
            {/* <p>{tweet._id}</p>             */}
            <p><img className='avatar1' src={tweet.owner.avatar} alt="" />{tweet.owner.username}</p>
            <button className='updatetweet-btn'><Link to={`/updatetweet/${tweet._id}`}  className={'updatetweet-link'}><FaPen/>Update Tweet</Link></button>
            </div>
            <p className='tweetcontent'>{tweet.content}</p>
            <p>Tweet Id : {tweet._id}</p>
            <button className='deletetweet-btn updatetweet-btn' onClick={() => handleDeleteTweet(tweet._id)}>
        <FaTrash/>Delete Tweet
      </button>
            {/* Add more tweet properties as needed */}
            <br />
            {/* <button className='links btn' onClick={() => deleteTweet(tweet._id)}>Delete Video</button> */}
            {/* <form onSubmit={deleteTweet(tweet._id)}>
            <button type="submit">delete</button>
            </form> */}
          </div>
        ))}
      </div>
      <Footer/>
      </>
    );
  };
  
  export default GetUserTweets;