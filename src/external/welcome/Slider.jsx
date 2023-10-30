import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./../../assets/img-1.jpg";
import img2 from "./../../assets/img-2.jpg";
import img3 from "./../../assets/img-3.jpg";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="myslider" className="myslider-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
      >
        <div className="my-slide">
          <div>
            <img className="slide-img" src={img1} alt="" />
          </div>
          <div className="slide-text">
            <h3 className="slide-head">Courses available for student</h3>
            <p className="slide-para">
              Student can access course contents and explore their learning
              skills
            </p>
            <a href="../courses" className="slide-btn">
              Courses
            </a>
          </div>
        </div>
        <div className="my-slide">
          <div>
            <img className="slide-img" src={img2} alt="" />
          </div>
          <div className="slide-text">
            <h3 className="slide-head">Teacher can also teach</h3>
            <p className="slide-para">
              If teacher wants to take an sessions or lecture they can teach &
              become an instructor.
            </p>
            <a href="../instructor" className="slide-btn">
              Instructor
            </a>
          </div>
        </div>
        <div className="my-slide">
          <div>
            <img className="slide-img" src={img3} alt="" />
          </div>
          <div className="slide-text">
            <h3 className="slide-head">
              Schools can purchase courses for student
            </h3>
            <p className="slide-para">
              Schools can take a courses they want for their students.
            </p>
            <a href="../courses" className="slide-btn">
              Courses
            </a>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
export default Slider;
