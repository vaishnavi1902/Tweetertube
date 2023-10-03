import "./blog.css";
import { AiOutlineRight } from "react-icons/ai";
import Blogs from "./blogs";

const Blog = () => {
  return (
    <>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Blog</a>
      </div>
      <div>
        <div className="heading">
          <h1>Blog</h1>
        </div>
      </div>
      <Blogs />
    </>
  );
};

export default Blog;
