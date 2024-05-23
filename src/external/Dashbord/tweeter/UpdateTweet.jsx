import { useState } from "react";
// import { updateTweet } from "../tweet.js";
import Footer from "../../footer/Footer.jsx";
import { Link } from "react-router-dom";
import './tweets.css'
import axios from "axios";
import { useParams } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const UpdateTweet = () => {
  const [content, setContent] = useState("");
  const {tweetId} = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/v1/tweets/${tweetId}`, { content });
      // const response = await updateTweet(tweetId, { content});
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
   <>
   <button className='mytweets-btn btn'><Link to={`/getusertweets`}  className={'mytweets-link'}>My Tweets</Link></button>
   <form onSubmit={handleSubmit}>
      <textarea placeholder="update tweet content" className="updatearea" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Update Tweet</button>
    </form>
   <Footer/></>
  );
};

export default UpdateTweet;