import { useState, useEffect } from 'react';
import axios from 'axios';
import './comment.css'
import { Link } from 'react-router-dom';
import LikeComment from '../likes/LikeComment';
import CommentLikeCount from '../videos/CommentLikeCount';
// eslint-disable-next-line react/prop-types
const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/v1/comments/${videoId}`, {
        params: { page, limit },
      });
      console.log(response.data);
      setComments(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/v1/comments/c/${commentId}`);
  
      // Redirect to the page where the comment was displayed
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [page, limit]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>
          <img className='avatar3' src={comment.owner.avatar} /><Link to={`/userprofile/${comment.owner.username}`}  className={'profile-link'}>{comment.owner.username}</Link>
          <p className='content-coment'> {comment.content}</p>

          {/* <p>{comment._id}</p> */}
          <LikeComment commentId={comment._id}/>
          <CommentLikeCount commentId={comment._id}/>
          {/* <button onClick={handleDeleteComment(comment._id)}>
      Delete Comment
    </button> */}
    <br />
          {/* Render other comment fields */}
        </div>
      ))}

      {/* Render pagination buttons */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
       
      </button>
      <button onClick={() => setPage(page + 1)}></button>
      <button onClick={() => setLimit(limit + 10)}></button>
    </div>
  );
};
export default CommentList ;