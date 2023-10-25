import "./courses.css";
import { AiOutlineRight } from "react-icons/ai";
import image from "./../../assets/bg-3.jpg";

const Courses = () => {
  return (
    <>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Courses</a>
      </div>
      <section className="container" id="courses">
        <div className="courses-container">
          <div className="course-item">
            <div className="course-image">
              <img src={image} alt="" />
            </div>
            <div className="course-content">
              <h4 className="course-title">Title</h4>
              <p className="course-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quia ea placeat reprehenderit eligendi exercitationem
                labore ex natus vero est laboriosam illum, tempore nostrum aut
                provident explicabo, commodi architecto autem!
              </p>
              <a href="/" className="start-learning">
                Start Learning
              </a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={image} alt="" />
            </div>
            <div className="course-content">
              <h4 className="course-title">Title</h4>
              <p className="course-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quia ea placeat reprehenderit eligendi exercitationem
                labore ex natus vero est laboriosam illum, tempore nostrum aut
                provident explicabo, commodi architecto autem!
              </p>
              <a href="/" className="start-learning">
                Start Learning
              </a>
            </div>
          </div>
          <div className="course-item">
            <div className="course-image">
              <img src={image} alt="" />
            </div>
            <div className="course-content">
              <h4 className="course-title">Title</h4>
              <p className="course-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quia ea placeat reprehenderit eligendi exercitationem
                labore ex natus vero est laboriosam illum, tempore nostrum aut
                provident explicabo, commodi architecto autem!
              </p>
              <a href="/" className="start-learning">
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
