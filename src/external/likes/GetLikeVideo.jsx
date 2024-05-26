import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './like.css'
const GetLikeVideo=()=> {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    const GetLikeVideo = async () => {
        try {
        
          const response = await axios.get(`/api/v1/likes/videos`);
          
          console.log(response.data.message);
          // setData()
          setData(response.data.message.video);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
      GetLikeVideo();
    }, [])
    
  return (
    <div>
      <h1>MY Likes</h1>
      <ul> 
      {data && (data.map((video)=>(  video.video ? (
          <li key={video._id}>
            <img className='thumbnail' src={video.video.thumbnail} alt="" />
            <p>Title: {video.video.title} </p>
          </li>
        ) : null
        )))
      }
    </ul>
    </div>
  )
}

export default GetLikeVideo