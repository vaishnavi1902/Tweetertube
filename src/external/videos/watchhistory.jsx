import { useEffect, useState } from 'react';
import axios from 'axios';

const WatchHistory = () => {
   const [watchHistory, setWatchHistory] = useState([]);
   const [error, setError] = useState(null);

useEffect(() => { 
  const fetchWatchHistory = async () => { 
    try {
       const response = await axios.get('/api/v1/users/history');
        const data = response.data.data;
        console.log(data.data);
        setWatchHistory(data); 
      }catch (error) { setError(error.message); } };

fetchWatchHistory();
 }, []);

if (error) { 
  return <div>Error: {error}</div>;
 }

return ( <>

<h1>Watch History</h1> 
<ul> 
  {watchHistory.map((video)=>( <li key={video._id}>
     <h2>{video.title}</h2> 
     <p>Owner: {video.owner.fullName}</p>
      <p>Duration: {video.duration} seconds</p> 
      {/* render other video properties as needed */}
       </li>
        ))
        };
         </ul> </> ); };
export default WatchHistory;