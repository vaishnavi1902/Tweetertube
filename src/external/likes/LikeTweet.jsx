import { useState } from 'react';
import axios from 'axios';
import './like.css'
import { FaRegThumbsUp } from "react-icons/fa";

const LikeTweet =(tweetId)=> {
    const [IsLike,setIsLike] =useState();
    const toggleLike = async () => {
        try {
            console.log(tweetId);
          const response = await axios.post(`/api/v1/likes/toggle/t/${tweetId.tweetId}`);
          console.log(response);
          setIsLike(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
  return (<>
   <button className='like-btn' onClick={toggleLike}><FaRegThumbsUp/></button>
   <p>{IsLike}</p>
   </>
  )
}

export default LikeTweet