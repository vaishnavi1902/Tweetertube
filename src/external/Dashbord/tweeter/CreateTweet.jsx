import { useContext, useState } from "react";
import  {createTweet } from "../tweet.js";
import { UserContext } from "../../../context/UserContext.jsx";
import Footer from "../../footer/Footer.jsx";
import { Link } from "react-router-dom";
import './tweets.css'
const CreateTweet = () => {
  const [content, setContent] = useState("");
  const {user} =useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId =user._id; // Replace with the actual user ID
      const response = await createTweet({ content, _id: userId });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>   
    <button className='mytweets-btn btn'><Link to={`/getusertweets`}  className={'mytweets-link'}>My Tweets</Link></button>
    <form onSubmit={handleSubmit}>
      <textarea className="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Tweet</button>
    </form>
    <Footer/>
    </>
  );
};

export default CreateTweet;