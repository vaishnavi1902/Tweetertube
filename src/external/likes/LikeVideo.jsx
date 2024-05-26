import { useState } from 'react';
import axios from 'axios';
import { FaRegThumbsUp } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const  LikeVideo = ({videoId})=> {
    // eslint-disable-next-line no-unused-vars
    const [IsLike,setIsLike] =useState();
    const toggleLike = async () => {
        try {
          const response = await axios.post(`/api/v1/likes/toggle/v/${videoId}`);
          console.log(response);
          setIsLike(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
  return (
   <>
    <button className='like-btn' onClick={toggleLike}><FaRegThumbsUp/></button>
   <p>{IsLike}</p>
   </>
  )
}

export default LikeVideo;