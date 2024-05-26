import { useState } from 'react';
import axios from 'axios';
import './like.css'
import { FaRegThumbsUp } from "react-icons/fa";

function LikeComment(commentId) {
    const [IsLike,setIsLike] =useState();
    const toggleLike = async () => {
        try {
          const response = await axios.post(`/api/v1/likes/toggle/c/${commentId.commentId}`);
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

export default LikeComment;