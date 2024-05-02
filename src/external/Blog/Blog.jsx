import "./blog.css";
import { AiOutlineRight } from "react-icons/ai";
import Blogs from "./Blogs";
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
const Blog = () => {
  return (
    <>
    <Nav/>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Blog</a>
      </div>

      <Blogs />
      <Footer/>
    </>
  );
};

export default Blog;
