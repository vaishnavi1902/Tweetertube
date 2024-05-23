import axios from "axios";



const createTweet = async (tweetData) => {
  const response = await axios.post('/api/v1/tweets/', tweetData);
  return response.data;
};


const updateTweet = async (tweetId, content) => {
  const response = await axios.patch(`/api/v1/tweets/${tweetId}`, { content });
  return response.data;
};


export { createTweet,  updateTweet};