import { useEffect, useState } from 'react';
import axios from 'axios';

const WatchHistory = () => {
   const [watchHistory, setWatchHistory] = useState([]);
   const [error, setError] = useState(null);
   const fetchWatchHistory = async () => { 
    try {
       const response = await axios.get('/api/v1/users/history');
        const data = response.data.data;
        console.log(data);
        setWatchHistory(data); 
      }catch (error) { setError(error.message); } };

useEffect(() => { 
  
fetchWatchHistory();
 }, []);

if (error) { 
  return <div>Error: {error}</div>;
 }

return ( 
<>
  <div className="container"> 
  <h1> Your Watch History</h1> 
    <ul> 
      {watchHistory && (watchHistory.map((video)=>( <li key={video._id}>
        <img className='thumbnail' src={video.thumbnail} alt="" />
        <p>Title: {video.title} </p>
        <p>Owner: {video.owner.fullName}</p>
          <p>Duration: {video.duration} seconds</p> 
          </li>
        ))
      )}
    </ul>
  </div>
</> 
 ); 
};
export default WatchHistory;