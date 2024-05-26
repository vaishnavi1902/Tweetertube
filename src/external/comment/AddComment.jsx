import { useState } from "react";
import axios from "axios";
import './comment.css'
// eslint-disable-next-line react/prop-types
const AddComment = ({ videoId }) => {
    const [content, setContent] = useState('');
    const [added, setAdded] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post(`/api/v1/comments/${videoId}`, {
          content,
        });
        console.log(response);
        setContent('');
        setAdded(true);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
     <>
     <div className="comment">
     <form onSubmit={handleSubmit} className="commentform">
        <input
          type="text"
          placeholder="type a comment here ......."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Add Comment</button>
        {added && <p>Comment added successfully!</p>}
      </form>
     </div>
     </>
    );
  };
export default AddComment;  