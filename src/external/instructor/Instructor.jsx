import { useState } from "react";
import "./instructor.css";
import bg2 from "../../assets/bg-2.webp";
import { BsCamera } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
const Instructor = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      {/* first section */}
      <Nav/>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Become an Instructor</a>
      </div>
      <section className="bgimage" id="instructor">
        <div className="overlay">
          <h1>
            <span>become</span> an Instructor &{" "}
          </h1>
          <h1>
            <span>teach</span> what you love
          </h1>
          <p className="para1">
            Share your knowledge with the largest community of creatives and
            generate an income by teaching online courses.
          </p>
          <div>
            <button className="teachcoursebtn">teach a course</button>
          </div>
          <p className="para1">
            We’ll check your proposal and get back to you.
          </p>
        </div>
      </section>

      {/* second section */}

      <section className="grid-container">
        <div className="grid-item">
          <div>
            <BsCamera
              style={{ color: "blue", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h2 className="head2">Produced by shikhasankalp</h2>
            <p className="para2">
              You bring the content and shikhasankalp makes it happen. This will
              be the beginning of a project we all do together, side by side.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <BiMessageAltAdd
              style={{ color: "blue", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h2 className="head2">Share with the community</h2>
            <p className="para2">
              Inspire and get inspired alongside other creatives. Eduma is a
              community with millions of creatives who are eager to learn.
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <BsPeople
              style={{ color: "blue", width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h2 className="head2">Your creativity is golden</h2>
            <p className="para2">
              Harness your passion. Create a course for thousands of people
              around the world and generate an income stream with your creative
              knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* third section */}

      <section className="howto">
        <div className="head1">
          <h1>
            how to become an <span>instructor ?</span>
          </h1>
        </div>
        <div className="tabs">
          <ul className="irules">
            <li className="header" onClick={() => updateToggle(1)}>
              <h2>Become An Intructor</h2>
            </li>
            <li className="header" onClick={() => updateToggle(2)}>
              <h2>Intructor Rules</h2>
            </li>
            <li className="header" onClick={() => updateToggle(3)}>
              <h2>Start With Courses</h2>
            </li>
          </ul>
        </div>
        <hr />
        <div className={toggle === 1 ? "show-content" : "content"}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <p>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for ‘lorem ipsum’ will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Many desktop publishing packages and
            web page editors now use Lorem Ipsum.
          </p>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
        </div>
      </section>

      {/* fourth section */}

      <section className="teach1">
        <div className="teachimg">
          <img src={bg2} alt="" className="bgimg" width={550} height={300} />
        </div>
        <div className="teach2">
          <div className="teachnow">
            <h1>Ready To Teach A Course?</h1>
            <p>
              There are millions of people out there who want to learn from
              creatives like you. If you love to teach and share what you know,
              Eduma is a unique place to do just that.
            </p>
            <div className="login">
              <p>
                Please{" "}
                <a href="../login" className="loginnow">
                  <b>login</b>
                </a>{" "}
                to send your request!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Instructor;
