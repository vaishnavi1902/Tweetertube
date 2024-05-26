import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../footer/Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import './tweets.css'
import LikeTweet from '../../likes/LikeTweet';
import TweetLikeCount from './TweetLikeCount';
// import { Link } from 'react-router-dom';
const Tweets = () => {
  const [tweets, setTweets] = useState([]);


  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('/api/v1/tweets');
        setTweets(response.data.data);
        // eslint-disable-next-line no-undef
      } catch (error) {
        console.error(error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <>
    <Navbar/>
    <div className='container all-tweets' >
      {/* Render tweets */}
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          {/* <button className='updatetweet-btn'><Link to={`/updatetweet/${tweet._id}`}  className={'updatetweet-link'}>Update Tweet</Link></button> */}
          {/* <p>{tweet._id}</p> */}
          <button  className='profile-btn'><img src={tweet.owner.avatar} /><Link to={`/userprofile1/${tweet.owner.username}`}  className={'profile-link'}>{tweet.owner.username}</Link></button>
          {/* <p><img className='avatar1' src={tweet.owner.avatar} alt="" />{tweet.owner.username}</p> */}
          <p className='tweetcontent'>{tweet.content}</p>
          <div className="likestweet">

          <LikeTweet tweetId={tweet._id} />
          <TweetLikeCount tweetId={tweet._id}/>
          </div>
          <p>Tweet Id : {tweet._id}</p>
        </div>
      ))}
    </div>
    
    <Footer/> 
    </>
    
  );
};

export default Tweets;