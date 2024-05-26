import axios from "axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
const TweetLikeCount = ({ tweetId }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCount = async () => {
    try {
      console.log(tweetId);
      const response = await axios.get(`/api/v1/likes/toggle/t/${tweetId}`);
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

export default TweetLikeCount;