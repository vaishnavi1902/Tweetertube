import "./blog.css";
import { AiOutlineRight } from "react-icons/ai";
import Blogs from "./Blogs";

const Blog = () => {
  return (
    <>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Blog</a>
      </div>

      <Blogs />
    </>
  );
};

export default Blog;
