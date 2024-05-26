import axios from "axios";
import { useEffect, useState } from "react";
import './videouplod.css'
// eslint-disable-next-line react/prop-types
const VideoLikeCount = ({ videoId }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCount = async () => {
    try {
      console.log(videoId);
      const response = await axios.get(`/api/v1/likes/toggle/v/${videoId}`);
      console.log(response);
      setData(response.data.message);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="num">
      {data && <p>{data}</p>}
    </div>
  );
};

export default VideoLikeCount;